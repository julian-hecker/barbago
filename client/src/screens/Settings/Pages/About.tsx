import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Screen, Text } from '../../../components';

const About = () => {
  return (
    <Screen>
      <Text>About</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default AboutStack;
