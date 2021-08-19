// import * as firebase from 'firebase/app';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import router from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
admin.initializeApp();

// const firebaseConfig = {
//   apiKey: 'AIzaSyBUP5n1qdS0lcR_6aPskG_4RWpEJ4eYWfg',
//   authDomain: 'barbago-c913f.firebaseapp.com',
//   projectId: 'barbago-c913f',
//   storageBucket: 'barbago-c913f.appspot.com',
//   messagingSenderId: '864038050819',
//   appId: '1:864038050819:web:9fa70fcd0c514a46a10236',
//   measurementId: 'G-HRSLT2P554',
// };
// firebase.initializeApp(firebaseConfig);

app.get('/reee', (req, res) => {
  admin
    .firestore()
    .collection('reee')
    .orderBy('createdAt', 'desc')
    .get()
    .then((data) => {
      data.forEach((doc) => {
        console.log(doc.data());
      });
      return res.json(data);
    });
});

app.post('/reee', (req, res) => {
  const { reee } = req.body;
  admin
    .firestore()
    .collection('reee')
    .add({ reee })
    .then((doc) => res.json({ message: `${doc.id} created` }))
    .catch((err) => res.status(500).json({ message: err }));
});

app.use('/', router);

exports.api = functions
  .region('us-east4', 'us-central1')
  .runWith({ memory: '512MB', timeoutSeconds: 30 })
  .https.onRequest(app);

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.6.8/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.6.8/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
*/
