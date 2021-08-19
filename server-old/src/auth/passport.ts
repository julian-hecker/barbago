import passport from 'passport';

// import localStrategy from './localStrategy';
// import facebookStrategy from './facebookStrategy';
import googleStrategy from './googleStrategy';

import User from '../models/User';

passport.serializeUser((user: any, done: any) => {
  console.log('serializing');
  return done(null, user.id);
});

passport.deserializeUser(async (id: number, done: any) => {
  console.log('deserializing');
  console.log(id);
  try {
    const user = await User.findByPk(id);
    if (user) return done(null, user);
    else return done(null, false);
  } catch (err) {
    return done(err);
  }
});

// passport.use(localStrategy);
// passport.use(facebookStrategy);
passport.use(googleStrategy);

export default passport;
