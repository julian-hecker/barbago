import React, { createContext, useEffect, useState } from 'react';

// https://kentcdodds.com/blog/how-to-use-react-context-effectively

// Using context with localstorage
// https://gist.github.com/jimode/c1d2d4c1ab33ba1b7be8be8c50d64555

// How to update context from child
// https://dev.to/oieduardorabelo/react-hooks-how-to-create-and-update-contextprovider-1f68

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
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
