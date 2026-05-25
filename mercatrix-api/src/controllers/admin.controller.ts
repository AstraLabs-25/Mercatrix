import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

export const getVendors = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const vendors = await prisma.user.findMany({
      where: { role: 'VENDOR' },
      include: { vendorProfile: true },
      orderBy: { created_at: 'desc' }
    });

    res.json({ vendors });
  } catch (error) {
    next(error);
  }
};

export const approveVendor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    
    const vendorProfile = await prisma.vendorProfile.findUnique({ where: { user_id: id } });
    if (!vendorProfile) {
      res.status(404).json({ message: 'Vendor not found' });
      return;
    }

    await prisma.vendorProfile.update({
      where: { user_id: id },
      data: { is_approved: true }
    });

    res.json({ message: 'Vendor approved successfully' });
  } catch (error) {
    next(error);
  }
};

const blockSchema = z.object({
  reason: z.string().min(5)
});

export const blockVendor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const { reason } = blockSchema.parse(req.body);

    const vendorProfile = await prisma.vendorProfile.findUnique({ where: { user_id: id } });
    if (!vendorProfile) {
      res.status(404).json({ message: 'Vendor not found' });
      return;
    }

    await prisma.vendorProfile.update({
      where: { user_id: id },
      data: { is_blocked: true, block_reason: reason }
    });

    res.json({ message: 'Vendor blocked successfully' });
  } catch (error) {
    next(error);
  }
};
