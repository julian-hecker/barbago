import React from 'react';
import { SectionList, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

import { Screen, Text } from '../components';
import { useTheme } from '@react-navigation/native';

// const Stack = createStackNavigator();

const options = [
  {
    title: 'Personal Settings',
    data: ['Personal Information', 'Payment Details'],
  },
  { title: 'Barber Settings', data: ['Set up a Barber Profile'] },
  {
    title: 'App Settings',
    data: ['Notifications', 'Preferences'],
  },
  {
    title: 'Support',
    data: ['How Barbago Works', 'Contact', 'Feedback'],
  },
  { title: 'Legal', data: ['Terms of Service', 'Privacy Policy'] },
];

const Settings: React.FC<any> = () => {
  const { colors } = useTheme();

  return (
    <Screen style={{ alignItems: 'stretch' }}>
      <SectionList
        sections={options}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <ListItem
            bottomDivider
            containerStyle={{
              backgroundColor: colors.card,
            }}
            onPress={() => alert('reee')}
          >
            <ListItem.Content>
              <ListItem.Title style={{ color: colors.text }}>
                {item}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <ListItem
            containerStyle={{
              backgroundColor: colors.background,
            }}
          >
            <ListItem.Subtitle style={{ color: colors.text }}>
              {title}
            </ListItem.Subtitle>
          </ListItem>
        )}
        renderSectionFooter={() => (
          <View style={{ marginBottom: 20 }}></View>
        )}
      />
    </Screen>
  );
};

const SettingsStack = () => {
  return null;
  // <Stack.Navigator>
  //   <Stack.Screen name="Settings" component={Settings} />
  // </Stack.Navigator>
};

export default Settings;
