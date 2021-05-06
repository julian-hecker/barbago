import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('../client/build'));
app.use(cors());

// import routes from './routes';
// app.use('/', routes);
app.use('/api', (req, res) => {
    res.json(123);
});
app.use('/', (req, res) => {
    res.sendFile('');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}/`);
});
