import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ContextProvider: React.FC = ({ children }) => (
  <SafeAreaProvider>
      <AppearanceProvider>{children}</AppearanceProvider>
  </SafeAreaProvider>
);

export default ContextProvider;
