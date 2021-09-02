import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Settings } from './Settings';
import {
  BarberSettings,
  Notifications,
  PaymentInfo,
  Account,
  Preferences,
  PrivacyScreen,
  TermsScreen,
} from '../other';

const Stack = createStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Payment" component={PaymentInfo} />
      <Stack.Screen name="Barber" component={BarberSettings} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen name="TOS" component={TermsScreen} />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
    </Stack.Navigator>
  );
};

export default SettingStack;
