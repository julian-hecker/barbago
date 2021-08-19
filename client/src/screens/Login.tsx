import React from 'react';

import { Screen, Text } from '../components';
import {
  AppleAuthComponent,
  GoogleAuthComponent,
} from '../services/Auth';

const Login = () => {
  return (
    <Screen>
      <Text>LOGGING IN TIME NOW</Text>
      <GoogleAuthComponent />
      <AppleAuthComponent />
    </Screen>
  );
};

export default Login;
