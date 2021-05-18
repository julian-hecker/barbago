import React from 'react';

import UserContext from './UserContext';

const ContextProvider: React.FC = ({ children }: any) => {
  return <UserContext>{children}</UserContext>;
};

export default ContextProvider;
