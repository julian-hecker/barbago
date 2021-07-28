import React, { createContext, useEffect, useState } from 'react';
import firebase from 'firebase';

import firebaseApp from '../config/firebase';

export const UserContext = createContext<Partial<firebase.User>>({});

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Partial<firebase.User>>({});

  firebaseApp.auth().onAuthStateChanged((user) => {
    console.log(user);
  });

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};
