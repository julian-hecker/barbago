import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

import { Screen } from '../components';
import { MainTabScreenNavProp } from './Navigation';

// https://github.com/react-native-maps/react-native-maps

const Map: React.FC<MainTabScreenNavProp> = (navigation) => {
  return (
    <Screen>
      <MapView style={styles.map} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map;
