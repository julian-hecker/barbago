import React, { useContext, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

import {
  ChangePicture,
  ProtectedScreen,
  Header,
  Input,
  Text,
} from '../../components';
import { UserContext } from '../../context';
import { db, usersTable } from '../../config/firebase';

// Time to make it possible to submit changes to your user account name and photo

const PersonalInfo = () => {
  const { user, signOut } = useContext(UserContext);
  const navigation = useNavigation();
  const [name, setName] = useState(user?.displayName ?? '');
  const [email, setEmail] = useState(user?.email ?? '');
  const [pictureUrl, setPictureUrl] = useState(user?.photoURL ?? '');
  const [bio, setBio] = useState('');
  const [error, setError] = useState('');

  const { colors } = useTheme();

  const handleSubmit = (): void => {
    if (name === '') {
      return setError('One cannot exist without their name.');
    }
    if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
    ) {
      return setError('Please enter a valid email address.');
    }
    // Add cases for not having changed anything.
  };

  // const updateProfile = (
  //   name: string,
  //   email: string,
  //   bio: string,
  // ): void => {
  //   usersTable.doc(user?.uid).set({ name, email, bio });
  // };

  return (
    <ProtectedScreen
      route={'Login'}
      style={{
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 20,
      }}
    >
      <Header>Account Information</Header>
      <View
        style={{
          flexDirection:
            Dimensions.get('window').width >= 500 ? 'row' : 'column',
        }}
      >
        <View style={{ flex: 1 }}>
          <Input
            label="Name"
            value={name}
            iconName="user"
            onChangeText={(text) => {
              setName(text);
            }}
          />
          <Input
            label="Email"
            value={email}
            iconName="envelope"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
        </View>
        <View
          style={{
            padding: 10,
            margin: 'auto',
          }}
        >
          <ChangePicture
            pictureUrl={pictureUrl}
            onPress={() => alert('aaaa')}
          />
        </View>
      </View>
      <Button
        title="Update Info"
        buttonStyle={{ backgroundColor: colors.primary }}
        titleStyle={{ fontWeight: 'bold' }}
        onPress={handleSubmit}
      />
      <Header style={{ marginTop: 20 }}>Authentication</Header>
      <Button
        title="Sign Out"
        buttonStyle={{ backgroundColor: colors.primary }}
        titleStyle={{ fontWeight: 'bold' }}
        onPress={() => {
          signOut!();
          navigation.goBack();
          navigation.navigate('Login');
        }}
      />
      <Button
        title="Delete Account"
        buttonStyle={{ backgroundColor: colors.primary }}
        titleStyle={{ fontWeight: 'bold' }}
        onPress={async () => {
          if (user) {
            await usersTable.doc(user.uid).delete();
            await user.delete();
          }
          navigation.goBack();
          navigation.navigate('Login');
        }}
      />
    </ProtectedScreen>
  );
};

export default PersonalInfo;
