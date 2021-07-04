import { Strategy as FacebookStrategy } from 'passport-facebook';

import {
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
} from '../config';

export default new FacebookStrategy({
  clientID: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_CLIENT_SECRET,
  callbackURL: '/auth/facebook/callback',
}, (_accessToken, _refreshToken, profile, done) => {
  // Successful Authentication.
});
