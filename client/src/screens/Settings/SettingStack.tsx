import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Text } from '../../components';
import { SettingsNavParams } from '../../types/navigation';
import { Settings } from './Settings';
import {
  About,
  BarberSettings,
  ContactScreen,
  FeedbackScreen,
  NotificationSettings,
  PaymentInfo,
  PersonalInfo,
  PreferenceSettings,
  PrivacyScreen,
  TermsScreen,
} from '../other';

const Stack = createStackNavigator<SettingsNavParams>();

// This is  where the inline function return component warning comes from

const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Personal" component={PersonalInfo} />
      <Stack.Screen name="Payment" component={PaymentInfo} />
      <Stack.Screen name="Barber" component={BarberSettings} />
      <Stack.Screen
        name="Notifications"
        component={NotificationSettings}
      />
      <Stack.Screen
        name="Preferences"
        component={PreferenceSettings}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="TOS" component={TermsScreen} />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
    </Stack.Navigator>
  );
};

export default SettingStack;
