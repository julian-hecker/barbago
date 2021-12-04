import { firestore } from 'firebase-admin';
import { auth, logger } from 'firebase-functions';

export const onCreateUser = auth.user().onCreate(async (user) => {
  logger.info('User created!', user);
  firestore().doc(`users/${user.uid}`).create({ uid: user.uid });
});

export const onDeleteUser = auth.user().onDelete(async (user) => {
  logger.info('User deleted!', user);
});
