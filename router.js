import Router from 'express';
import userRoutes from './userRoutes/userRoutes.js';

const router = new Router();

router.use('/users', userRoutes);
router.use((req, res) => {
  res.status(404).json({ message: 'Page not found' });
});

export default router;
