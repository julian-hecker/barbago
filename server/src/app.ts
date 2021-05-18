import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import session from 'express-session';

import { PORT, SESSION_SECRET } from './config';
import auth from './auth';
import router from './routes';
import passport from './passport';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: 'none',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}

app.use('/api', router);
app.use('/auth', auth);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}/`);
});
