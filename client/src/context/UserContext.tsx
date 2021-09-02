import React, { createContext, useEffect, useState } from 'react';

import { firebase, firebaseApp } from '../config/firebase';
import { User } from '../types/models';

interface IUserContext {
  user: firebase.User | null;
  dbUser: User | null;
  signOut?: () => Promise<void>;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  dbUser: null,
});

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [dbUser, setDbUser] = useState<User | null>(null);

  const signOut = async () => {
    await firebaseApp.auth().signOut();
  };

  const getDbUser = () => {
    
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
    dbUser: dbUser,
    signOut,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
