import { usersTable } from '../../config/firebase';
import { User } from '../../types/models';

export const setUser = async (
  uid: string,
  user: Partial<User>,
): Promise<void> => {
  try {
    usersTable.doc(uid).set(user);
  } catch (err) {
    console.error(err);
  }
};

export const getUser = async (uid: string): Promise<User> => {
  try {
    return (await usersTable.doc(uid).get()).data() as User;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
