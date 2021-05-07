import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

import db from './config/database';
import router from './routes/routes';

db.authenticate()
    .then(() => console.log('DB Connected'))
    .catch((err: any) => console.error('DB Not Connected: ', err));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('../client/build'));
app.use(cors());

// Handles all backend API requests
app.use('/api', router);

// Serves the React Application
app.use('/', (req: Request, res: Response) => {
    res.sendFile('');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}/`);
});
