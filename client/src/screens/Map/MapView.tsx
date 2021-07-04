import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/core';

import { Screen } from '../../components';
import { MainTabScreenNavProp } from '../Navigation';

// https://github.com/react-native-maps/react-native-maps

const Map = () => {
  const navigation = useNavigation<MainTabScreenNavProp>();

  return <MapView style={styles.map} />;
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map;
