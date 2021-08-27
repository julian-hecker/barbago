import React, { useContext, useState } from 'react';
import {
  Dimensions,
  Image,
  TouchableOpacity as Touchable,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

import {
  ProtectedScreen,
  Header,
  Input,
  Text,
} from '../../components';
import { UserContext } from '../../context';

// Time to make it possible to submit changes to your user account name and photo

const PersonalInfo = () => {
  const { user } = useContext(UserContext);
  const [name, setName] = useState(user?.displayName ?? '');
  const [email, setEmail] = useState(user?.email ?? '');
  const [error, setError] = useState('');

  const { colors } = useTheme();

  const updateProfile = (): void => {
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
          <Touchable
            // Todo: implement image uploading
            onPress={() => alert('AAH')}
            style={{ position: 'relative' }}
          >
            <Image
              source={{ uri: user?.photoURL ?? '' }}
              style={{
                width: 96,
                height: 96,
                backgroundColor: '#777777',
                borderRadius: 96 / 2,
              }}
            />
            <Text
              style={{
                position: 'absolute',
                width: 96,
                bottom: 0,
                textAlign: 'center',
                backgroundColor: '#333333dd',
                color: 'white',
              }}
            >
              Change Photo
            </Text>
          </Touchable>
        </View>
      </View>
      <Button
        title="Update Info"
        buttonStyle={{ backgroundColor: colors.primary }}
        titleStyle={{ fontWeight: 'bold' }}
        onPress={updateProfile}
      />
      <Header style={{ marginTop: 20 }}>Other</Header>
    </ProtectedScreen>
  );
};

export default PersonalInfo;
