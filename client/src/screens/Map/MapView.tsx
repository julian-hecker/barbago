import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/core';

import { MainTabScreenNavProp } from '../Navigation';

// https://github.com/react-native-maps/react-native-maps

const Map = ({ data }: MapViewProps) => {
  const navigation = useNavigation<MainTabScreenNavProp>();

  return (
    <MapView
      style={styles.map}
      showsMyLocationButton={true}
      showsUserLocation={true}
      mapType="mutedStandard"
      mapPadding={{ top: 100, right: 16, bottom: 160, left: 0 }}
      initialRegion={{
        latitude: 41,
        longitude: -73.83,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}
    >
      {data.map(({ name, position }: any, index) => {
        const coords = {
          latitude: position[0],
          longitude: position[1],
        };
        return (
          <Marker
            coordinate={coords}
            title={name}
            key={index}
            description={`${coords.latitude}, ${coords.longitude}`}
          />
        );
      })}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map;
