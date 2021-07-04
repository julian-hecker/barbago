import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../config';
import User from '../models/User';

export default new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
  },
  async (_accessToken, _refreshToken, profile, done) => {
    // function called on successful authentication
    // This is where you store folks in database based on googleID and username
    // the shape of profile object depends on the provider
    // Either create a user or find your existing user

    try {
      const user = await User.findOne({
        where: { oauthId: profile.id, oauthType: 'google' },
      });
      if (user) return done(null, user);
      const newUser = await User.create({
        email: profile.emails[0].value,
        name: profile.displayName,
        oauthId: profile.id,
        oauthType: profile.provider,
      });
      return done(null, newUser);
    } catch (err) {
      return done(err);
    }
  },
);
