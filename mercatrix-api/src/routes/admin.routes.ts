import { Router } from 'express';

const router = Router();

// GET /api/admin/vendors -> View all vendors
router.get('/vendors', (req, res) => {
    res.json({ message: 'List vendors' });
});

// PUT /api/admin/vendors/:id/approve -> Approves profile
router.put('/vendors/:id/approve', (req, res) => {
    res.json({ message: 'Approve vendor' });
});

// PUT /api/admin/vendors/:id/block -> Blocks vendor
router.put('/vendors/:id/block', (req, res) => {
    res.json({ message: 'Block vendor' });
});

// POST /api/admin/categories -> Creates hierarchical categories 
router.post('/categories', (req, res) => {
    res.json({ message: 'Create category' });
});

export default router;