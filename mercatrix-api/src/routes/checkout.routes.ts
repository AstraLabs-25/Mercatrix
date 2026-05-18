import { Router } from 'express';

const router = Router();

// POST /api/checkout -> Initializes Razorpay split payment
router.post('/', (req, res) => {
    res.json({ message: 'Initiate checkout' });
});

export default router;