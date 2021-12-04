import { firestore, logger } from 'firebase-functions';

const userCollection = firestore.document('users/{uid}');

export const onCreateUserRecord = userCollection.onCreate(
  async (snapshot, context) => {
    logger.info('User record created!', snapshot, context);
  },
);

export const onDeleteUserRecord = userCollection.onDelete(
  async (snapshot, context) => {
    logger.info('User record deleted!', snapshot, context);
  },
);

export const onUpdateUserRecord = userCollection.onUpdate(
  async (change, context) => {
    logger.info('User record updated!', change, context);
  },
);

export const onWriteUserRecord = userCollection.onWrite(
  async (change, context) => {
    logger.info('User record written!', change, context);
  },
);
