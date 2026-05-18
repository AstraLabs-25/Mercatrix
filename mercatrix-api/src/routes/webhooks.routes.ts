import { Router } from 'express';

const router = Router();

// POST /api/webhooks/razorpay
router.post('/razorpay', (req, res) => {
    res.json({ message: 'Razorpay webhook received' });
});

export default router;