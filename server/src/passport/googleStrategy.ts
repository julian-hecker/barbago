import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

export default new GoogleStrategy(
  {
    // Get client ID and secret from Google Console
    clientID: 'GOOGLE CLIENT ID',
    clientSecret: 'GOOGLE CLIENT SECRET',
    callbackURL: '/auth/google/callback',
  },
  (accessToken, refreshToken, profile, cb) => {
    // function called on successful authentication
    console.log(profile);
    cb(null, profile);
  },
);
