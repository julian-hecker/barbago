import { Router } from 'express';
import barberRouter from './barber.route';
const router = Router();

router.use('/barber', barberRouter);

export default router;
