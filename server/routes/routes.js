import { Router } from 'express';
import barberRouter from './barber.route.js';
const router = Router();

router.use('/barber', barberRouter);

export default router;
