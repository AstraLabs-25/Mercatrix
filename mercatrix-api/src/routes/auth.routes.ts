import { Router } from 'express';

const router = Router();

// POST /api/auth/send-otp
router.post('/send-otp', (req, res) => {
    res.json({ message: 'Send OTP endpoint' });
});

// POST /api/auth/verify-otp
router.post('/verify-otp', (req, res) => {
    res.json({ message: 'Verify OTP endpoint' });
});

export default router;
