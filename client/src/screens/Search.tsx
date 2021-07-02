import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Screen, Text } from '../components';
import { Map } from './';

const TopTab = createMaterialTopTabNavigator();

const Results = () => (
  <Screen>
    <Text>Results</Text>
  </Screen>
);

const Search: React.FC = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Results" component={Results} />
      <TopTab.Screen name="Map" component={Map} />
    </TopTab.Navigator>
  );
};

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ title: 'Barber Search' }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
