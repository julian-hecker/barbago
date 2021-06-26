import { Router } from 'express';

import passport from './passport';

const router = Router();

router.get('/user', (req: any, res: any) => {
  if (req.user) return res.json({ user: req.user });
  else return res.status(404).json({ user: null });
});

router.get('/logout', (req: any, res: any) => {
  res.clearCookie('connect.sid');
  req.logout();
  return res.json({ message: 'logged out' });
});

// // https://github.com/thechutrain/mern-passport/blob/master/server/auth/index.js
// router.post(
//   '/login',
//   (req, res, next) => {
//     console.log(req.body);
//     next();
//   },
//   passport.authenticate('local'),
//   (req, res) => {
//     console.log('Logging in...');
//     console.log(req.user);
//     return res.json({ user: req.user });
//   },
// );

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  }),
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/login',
  }),
  (req: any, res: any) => {
    // req.session.user = req.user;
    return res.redirect('/');
  },
);

export default router;

// https://www.youtube.com/watch?v=Gwru3BueuiE&list=TLPQMTgwNTIwMjGi6zSabJRi6w&index=20
