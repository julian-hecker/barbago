import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { PORT } from './config/config';
import router from './routes/routes';
import sequelize from './config/database';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('../client/build'));
app.use(cookieParser());
app.use(cors());

// Handles all backend API requests
app.use('/api', router);

// Serves the React Application
app.use('/', (req: Request, res: Response) => {
    res.sendFile('');
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}/`);
});
