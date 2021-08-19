import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Screen, Text } from '../components';

const Messages = () => {
  return (
    <Screen>
      <Text>Reee</Text>
    </Screen>
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
