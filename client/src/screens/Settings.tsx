import React from 'react';
import { SectionList, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useTheme, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Screen, Text } from '../components';
import { MainTabScreenNavProp } from '../utils/navigation';
import { ScrollView } from 'react-native';

const Stack = createStackNavigator();

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

const OldSettings: React.FC<any> = () => {
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

const Settings = () => {
  const { navigate } = useNavigation<MainTabScreenNavProp>();
  const { colors } = useTheme();

  return (
    <Screen style={{ alignItems: 'stretch' }}>
      <ScrollView>
        {options.map(({ title, data }, index) => (
          <React.Fragment key={index}>
            <ListItem
              containerStyle={{
                backgroundColor: colors.background,
                marginTop: index ? 20 : 0,
              }}
            >
              <ListItem.Subtitle style={{ color: colors.text }}>
                {title}
              </ListItem.Subtitle>
            </ListItem>
            {data.map((item, index) => (
              <ListItem
                bottomDivider
                containerStyle={{
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                }}
                onPress={() => alert('reee')}
                key={index}
              >
                <ListItem.Content>
                  <ListItem.Title style={{ color: colors.text }}>
                    {item}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </ScrollView>
    </Screen>
  );
};

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
