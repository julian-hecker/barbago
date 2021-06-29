import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
} from 'react-native';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [state, setState] = useState({ name: 'r' });

  const clickHandler = () => {
    setState({ ...state, name: state.name + 'e' });
  };

  // Find out if you can update styles after render using state

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open App.tsx</Text>
      <Button
        title="Google"
        onPress={() => Linking.openURL('https://google.com/')}
      />
      <Button title={state.name} onPress={clickHandler} />
    </View>
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

export default registerRootComponent(App);
