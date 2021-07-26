import React from 'react';

import { Screen, Text } from '../components';
import { RootStackScreenProps } from '../utils/navigation';
import {
  AppleAuthComponent,
  FacebookAuthComponent,
  GoogleAuthComponent,
} from '../services/Auth';

const Login = ({ navigation, route }: RootStackScreenProps) => {
  return (
    <Screen>
      <Text>LOGGING IN TIME NOW</Text>
      <GoogleAuthComponent />
      <FacebookAuthComponent />
      <AppleAuthComponent />
    </Screen>
  );
};

export default Login;
