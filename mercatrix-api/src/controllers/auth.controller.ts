import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { hashPassword, comparePassword } from '../utils/hash';
import { generateTokens, verifyRefreshToken } from '../utils/jwt';
import { env } from '../config/env';

const prisma = new PrismaClient();

const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[0-9]/, 'Password must contain at least 1 number')
  .regex(/[^a-zA-Z0-9]/, 'Password must contain at least 1 special character');

const signupSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

const vendorSignupSchema = signupSchema.extend({
  business_name: z.string().min(2),
  phone_number: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const setCookies = (res: Response, accessToken: string, refreshToken: string) => {
  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 15 * 60 * 1000, // 15 mins
  });
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};

export const signup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = signupSchema.parse(req.body);

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: 'Email already exists' });
      return;
    }

    const password_hash = await hashPassword(password);

    const user = await prisma.user.create({
      data: { email, password_hash, role: 'CUSTOMER' },
    });

    const { accessToken, refreshToken } = generateTokens({ userId: user.id, role: user.role });
    setCookies(res, accessToken, refreshToken);

    res.status(201).json({ message: 'Signup successful', user: { id: user.id, email: user.email, role: user.role } });
  } catch (error) {
    next(error);
  }
};

export const vendorSignup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password, business_name, phone_number } = vendorSignupSchema.parse(req.body);

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: 'Email already exists' });
      return;
    }

    const password_hash = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        email,
        password_hash,
        role: 'VENDOR',
        vendorProfile: {
          create: { business_name, phone_number },
        },
      },
    });

    const { accessToken, refreshToken } = generateTokens({ userId: user.id, role: user.role });
    setCookies(res, accessToken, refreshToken);

    res.status(201).json({ message: 'Vendor signup successful. Pending approval.', user: { id: user.id, email: user.email, role: user.role } });
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = loginSchema.parse(req.body);

    // 1. Check Super Admin credentials first
    if (email === env.ADMIN_EMAIL && password === env.ADMIN_PASSWORD) {
      // Find or create SUPER_ADMIN user
      let admin = await prisma.user.findUnique({ where: { email } });
      if (!admin) {
        const hash = await hashPassword(password);
        admin = await prisma.user.create({
          data: { email, password_hash: hash, role: 'SUPER_ADMIN' }
        });
      }

      const { accessToken, refreshToken } = generateTokens({ userId: admin.id, role: 'SUPER_ADMIN' });
      setCookies(res, accessToken, refreshToken);
      res.json({ message: 'Admin login successful', user: { id: admin.id, email: admin.email, role: 'SUPER_ADMIN' } });
      return;
    }

    // 2. Check Database for Vendors/Customers
    const user = await prisma.user.findUnique({
      where: { email },
      include: { vendorProfile: true }
    });

    if (!user || !(await comparePassword(password, user.password_hash))) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    if (!user.is_active) {
      res.status(403).json({ message: 'Account is deactivated' });
      return;
    }

    if (user.role === 'VENDOR') {
      if (user.vendorProfile?.is_blocked) {
        res.status(403).json({ message: 'Vendor account is blocked', reason: user.vendorProfile.block_reason });
        return;
      }
    }

    const { accessToken, refreshToken } = generateTokens({ userId: user.id, role: user.role });
    setCookies(res, accessToken, refreshToken);

    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        is_approved: user.vendorProfile?.is_approved
      }
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  res.json({ message: 'Logout successful' });
};

export const refresh = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      res.status(401).json({ message: 'Refresh token required' });
      return;
    }

    const payload = verifyRefreshToken(refreshToken);
    const { accessToken, refreshToken: newRefreshToken } = generateTokens({ userId: payload.userId, role: payload.role });
    
    setCookies(res, accessToken, newRefreshToken);
    res.json({ accessToken });
  } catch (error) {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
};

export const me = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.userId },
      select: { id: true, email: true, role: true, vendorProfile: true }
    });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json({ user });
  } catch (error) {
    next(error);
  }
};
