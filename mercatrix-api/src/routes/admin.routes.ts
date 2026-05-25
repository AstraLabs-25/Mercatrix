import { Router } from 'express';
import { getVendors, approveVendor, blockVendor } from '../controllers/admin.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { requireRole } from '../middlewares/role.middleware';

const router = Router();

// Only SUPER_ADMIN can access these routes
router.use(authenticate, requireRole(['SUPER_ADMIN']));

// GET /api/admin/vendors -> View all vendors
router.get('/vendors', getVendors);

// PUT /api/admin/vendors/:id/approve -> Approves profile
router.put('/vendors/:id/approve', approveVendor);

// PUT /api/admin/vendors/:id/block -> Blocks vendor
router.put('/vendors/:id/block', blockVendor);

// POST /api/admin/categories -> Creates hierarchical categories 
router.post('/categories', (req, res) => {
    res.json({ message: 'Create category (Not implemented)' });
});

export default router;