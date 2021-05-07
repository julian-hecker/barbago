import { Router } from 'express';

import barberRouter from './barber.route';
import userRouter from './user.route';

const router = Router();

router.use('/barber', barberRouter);
router.use('/user', userRouter);

export default router;
