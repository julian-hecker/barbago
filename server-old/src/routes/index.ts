import { Router } from 'express';

import barberRouter from './barber.route';
import userRouter from './user.route';

const router = Router();

router.use('/barber', barberRouter);
router.use('/user', userRouter);
router.get('*', (req, res) => {
    res.status(404).send('Route not found');
});

export default router;
