import React from 'react';
import { Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Modalize } from 'react-native-modalize';

import { Screen, Text } from '../components';
import Map from './Map';
import { useRef } from 'react';

const Results = () => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => modalizeRef.current?.open();

  return (
    <Screen>
      <Modalize ref={modalizeRef}>
        <Text style={{ color: 'red' }}>THIS IS THE MODALIZER</Text>
      </Modalize>
      <Text>Results</Text>
      <Button title="Open Modal" onPress={onOpen} />
    </Screen>
  );
};

const TopTab = createMaterialTopTabNavigator();

const Search: React.FC = () => {
  return (
    <>
      <TopTab.Navigator>
        <TopTab.Screen name="Results" component={Results} />
        <TopTab.Screen name="Map" component={Map} />
      </TopTab.Navigator>
    </>
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
