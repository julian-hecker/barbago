import React, { useEffect } from 'react';

import { Screen, Text } from '../components';
import { RootStackScreenProps } from './Navigation';

const Login = ({ navigation, route }: RootStackScreenProps) => {
  return (
    <Screen>
      <Text>LOGGING IN TIME NOW</Text>
    </Screen>
  );
};

export default Login;
