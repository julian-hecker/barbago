import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Results = () => (
  <View style={styles.container}>
    <Text>Results</Text>
  </View>
);
const Map = () => (
  <View style={styles.container}>
    <Text>Map</Text>
  </View>
);

const Search: React.FC = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      
    }}>
      <Tab.Screen name="Results" component={Results} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Search;
