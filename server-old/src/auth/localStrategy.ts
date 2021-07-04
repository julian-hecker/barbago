import { Strategy as LocalStrategy } from 'passport-local';

export default new LocalStrategy(
  {
    usernameField: 'username',
  },
  (username, password, done) => {},
);
