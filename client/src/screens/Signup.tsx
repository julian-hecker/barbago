import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Button, GestureResponderEvent } from 'react-native';

import {
  Header,
  Input,
  ProtectedScreen,
  Redirect,
  Text,
} from '../components';
import { db, usersTable } from '../config/firebase';
import { UserContext } from '../context';

const Signup: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);

  const [name, setName] = useState(user?.displayName ?? '');
  const [picture, setPicture] = useState(user?.photoURL ?? '');
  const [phone, setPhone] = useState(user?.phoneNumber ?? '');
  const [bio, setBio] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: GestureResponderEvent): void => {
    signup();
  };

  const signup = async () => {
    if (user) {
      // console.log(usersTable.doc(user.uid));
      usersTable.doc(user.uid).set({
        name,
        picture,
        phone,
        bio,
      });
    } else {
      // Not Authenticated; create a toast message and redirect to login
    }
  };

  return (
    <ProtectedScreen
      route="Login"
      style={{
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 20,
      }}
    >
      {/* Redirect to home if there's already a db user */}
      {/* <Redirect condition={!!dbUser} route={'Main'} /> */}
      <Redirect condition={false} route={'Main'} />
      {/* Otherwise allow user to configure fields like name, pic, etc. */}
      <Header>Register Account Details</Header>
      <Input
        label="Name"
        value={name}
        iconName="user"
        placeholder="Jon Smith"
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <Input
        label="Phone"
        value={phone}
        iconName="phone"
        placeholder="516-123-4567"
        onChangeText={(text) => {
          setPhone(text);
        }}
      />

      <Button title="Sign Up" onPress={handleSubmit} />
    </ProtectedScreen>
  );
};

export default Signup;
