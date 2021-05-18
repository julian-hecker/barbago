import passport from 'passport';

import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as FacebookStrategy } from 'passport-facebook';

import googleStrategy from './googleStrategy';

import User from '../models/User';

passport.serializeUser((user: any, done: any) => done(null, user.id));

passport.deserializeUser(async (id: number, done: any) => {
  try {
    const user = await User.findByPk(id);
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
});

passport.use(googleStrategy);

export default passport;
