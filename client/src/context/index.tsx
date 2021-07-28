import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserContextProvider, UserContext } from './UserContext';

const ContextProvider: React.FC = ({ children }) => (
  <UserContextProvider>
    <SafeAreaProvider>
      <AppearanceProvider>{children}</AppearanceProvider>
    </SafeAreaProvider>
  </UserContextProvider>
);

export default ContextProvider;

export { UserContext };
