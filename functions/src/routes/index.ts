import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send('This is HOME');
});

export default router;
