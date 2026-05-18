import { Router } from 'express';

const router = Router();

// POST /api/vendor/apply
router.post('/apply', (req, res) => {
    res.json({ message: 'Apply to be a vendor' });
});

// POST /api/vendor/products
router.post('/products', (req, res) => {
    res.json({ message: 'Create product' });
});

// GET /api/vendor/orders
router.get('/orders', (req, res) => {
    res.json({ message: 'Get vendor orders' });
});

// PUT /api/vendor/orders/:subOrderId/status
router.put('/orders/:subOrderId/status', (req, res) => {
    res.json({ message: 'Update order status' });
});

export default router;