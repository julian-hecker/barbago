import React, { useContext } from 'react';

import { Screen, Text } from '../components';
import firebaseApp from '../config/firebase';
import { UserContext } from '../context';
import {
  AppleAuthComponent,
  FacebookAuthComponent,
  GoogleAuthComponent,
} from '../services/Auth';
import { RootStackScreenProps } from '../utils/navigation';

const Login = ({ navigation, route }: RootStackScreenProps) => {
  const user = useContext(UserContext);

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
