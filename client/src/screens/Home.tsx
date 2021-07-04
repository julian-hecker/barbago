import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Screen, Text } from '../components';
import { MainTabScreenNavProp } from './Navigation';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

const Home = () => {
  const navigation = useNavigation<MainTabScreenNavProp>();
  const { colors } = useTheme();
  const { text } = colors;

  return (
    <Screen>
      <Text>Home</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default HomeStackScreen;
