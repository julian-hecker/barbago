import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Text } from '../../components';
import { SettingsNavParams } from '../../types/navigation';
import { Settings } from './Settings';
import { About } from '../other';

const Stack = createStackNavigator<SettingsNavParams>();

const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="Personal"
        component={() => <Text>Personal</Text>}
      />
      <Stack.Screen
        name="Payment"
        component={() => <Text>Payment</Text>}
      />
      <Stack.Screen
        name="Barber"
        component={() => <Text>Barbara</Text>}
      />
      <Stack.Screen
        name="Notifications"
        component={() => <Text>Notifications</Text>}
      />
      <Stack.Screen
        name="Preferences"
        component={() => <Text>Preferences</Text>}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contact"
        component={() => <Text>Contact</Text>}
      />
      <Stack.Screen
        name="Feedback"
        component={() => <Text>Feedback</Text>}
      />
      <Stack.Screen name="TOS" component={() => <Text>TOS</Text>} />
      <Stack.Screen
        name="Privacy"
        component={() => <Text>Privacy</Text>}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
