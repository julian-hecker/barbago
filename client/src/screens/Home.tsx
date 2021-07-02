import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { MainTabParams } from '../screens';
import { Screen, Text } from '../components';

type HomeProps = BottomTabNavigationProp<MainTabParams, 'Home'>;

const Home: React.FC<HomeProps> = () => {
  const navigation = useNavigation<HomeProps>();
  const { colors } = useTheme();
  const { text } = colors;

  return (
    <Screen>
      <Text style={{}}>Home</Text>
    </Screen>
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

export default Home;
