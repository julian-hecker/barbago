import React from 'react';

import UserContext from './UserContext';
import SettingContext from './SettingContext';

const ContextProvider: React.FC = ({ children }: any) => {
  return (
    <UserContext>
      <SettingContext>{children}</SettingContext>
    </UserContext>
  );
};

export default ContextProvider;
