import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import session from 'express-session';
import path from 'path';

import { PORT, SESSION_SECRET } from './config';
import passport from './auth/passport';
import auth from './auth';
import router from './routes';
import sequelize from './config/database';


const app = express();
const buildDir = path.join(process.cwd() + '/../client/build');

app.use(express.static(buildDir));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    // cookie: {
    //   sameSite: 'none',
    //   secure: 'auto',
    //   maxAge: 1000 * 60 * 60 * 24 * 7,
    // },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', router);
app.use('/auth', auth);

app.get('*', (req, res) =>
  res.sendFile(path.join(buildDir, 'index.html')),
);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}/`);
});
