import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

import { Screen } from '../components';

const Map = ({ route }: any) => {
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
