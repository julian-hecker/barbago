import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
import * as express from 'express';
import router from './routes';

const app = express();

app.use('/', router);

exports.api = functions.https.onRequest(app);
