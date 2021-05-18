import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';

import { PORT, SESSION_SECRET } from './config/config';
import router from './routes/routes';
import sequelize from './config/database';

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
    }),
);
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
}

// Handles all backend API requests
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}/`);
});
