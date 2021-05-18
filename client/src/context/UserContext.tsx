import React, { createContext, useEffect, useState } from 'react';

// https://kentcdodds.com/blog/how-to-use-react-context-effectively

export const UserContext = createContext<any>({});

const UserContextProvider: React.FC = ({ children }: any) => {
  const [user, setUser] = useState<any>({ user: null });

  useEffect(() => {
    fetch('/auth/user', { credentials: 'include' })
      .then((res) => res.json())
      .then((res) => res.data && setUser(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
