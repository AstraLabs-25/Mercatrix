import { Router } from 'express';
import { signup, vendorSignup, login, logout, refresh, me } from '../controllers/auth.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/signup', signup);
router.post('/vendor-signup', vendorSignup);
router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh', refresh);
router.get('/me', authenticate, me);

export default router;
