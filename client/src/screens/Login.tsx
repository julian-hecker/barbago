import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';

import { Redirect, Screen, Text } from '../components';
import { UserContext } from '../context';
import {
  AppleAuthComponent,
  GoogleAuthComponent,
} from '../services/Auth';

const Login = () => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();

  return (
    <Screen>
      {/* If there's an auth user, redirect to signup */}
      <Redirect condition={!!user} route={'Signup'} />
      <Text>LOGGING IN TIME NOW</Text>
      <GoogleAuthComponent
        onSuccess={() => {
          navigation.navigate('Signup');
        }}
      />
      <AppleAuthComponent />
    </Screen>
  );
};

export default Login;
