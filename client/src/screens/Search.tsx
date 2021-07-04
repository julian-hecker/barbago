import React, { useRef } from 'react';
import { GestureResponderEvent } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Modalize } from 'react-native-modalize';

import { Button, Modal, Screen, Text } from '../components';
import Map from './Map';

const MapScreen = () => {
  const modalRef = useRef<Modalize>(null);

  return (
    <Screen>
      <Map />
      <Modal ref={modalRef}>
        <Text>Reeeeee</Text>
      </Modal>
    </Screen>
  );
};

const Stack = createStackNavigator();

const SearchStack = () => {
  const openFilters = (event: GestureResponderEvent) => alert('reee');

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={MapScreen}
        options={{
          title: 'Barber Search',
          headerRight: () => (
            <Button
              title="Filter"
              onPress={openFilters}
              style={{ marginRight: 16 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
