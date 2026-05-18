import { Router } from 'express';

const router = Router();

// GET /api/products -> Search, Filter, Sort
router.get('/products', (req, res) => {
    res.json({ message: 'List products' });
});

// GET /api/cart
router.get('/cart', (req, res) => {
    res.json({ message: 'Get cart' });
});

// POST /api/cart
router.post('/cart', (req, res) => {
    res.json({ message: 'Add to cart' });
});

// GET /api/orders
router.get('/orders', (req, res) => {
    res.json({ message: 'Get customer orders' });
});

// POST /api/reviews
router.post('/reviews', (req, res) => {
    res.json({ message: 'Create review' });
});

export default router;