import { Router } from 'express';

import passport from '../passport';

const router = Router();

router.get('/user', (req, res) => {
  if (req.user) return res.json({ user: req.user });
  else return res.status(404).json({ user: null });
});

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile'] }),
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/'),
);

export default router;
