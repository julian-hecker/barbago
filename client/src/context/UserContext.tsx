import React, { createContext, useEffect, useState } from 'react';

import {
  firebase,
  firebaseApp,
} from '../config/firebase';

interface IUserContext {
  user: firebase.User | null;
  signOut?: () => Promise<void>;
}

export const UserContext = createContext<IUserContext>({
  user: null,
});

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  const signOut = async () => {
    await firebaseApp.auth().signOut();
  };

  useEffect(() => {
    const unsubscribe = firebaseApp
      .auth()
      .onAuthStateChanged((user) => {
        console.log(user?.uid);
        setUser(user);
      });
    return unsubscribe;
  }, []);

  const value: IUserContext = {
    user: user,
    signOut,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
