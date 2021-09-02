import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ProtectedScreen, Text } from '../components';

const Messages = () => {
  return (
    <ProtectedScreen>
      <Text>Reee</Text>
    </ProtectedScreen>
  );
};

const Stack = createStackNavigator();

const MessagesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
};

export default MessagesStack;
