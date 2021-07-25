import React from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useTheme, useNavigation } from '@react-navigation/native';

import { Screen } from '../../components';
import { SettingStackNavProp } from '../../utils/navigation';

export const Settings = () => {
  const navigation = useNavigation<SettingStackNavProp>();

  const { colors } = useTheme();

  const options: IOption[] = [
    {
      title: 'Personal Settings',
      pages: [
        {
          name: 'Personal Information',
          action: () => navigation.push('Personal'),
        },
        {
          name: 'Payment Details',
          action: () => navigation.push('Payment'),
        },
      ],
    },
    {
      title: 'Barber Settings',
      pages: [
        {
          name: 'Set up a Barber Profile',
          action: () => navigation.push('Barber'),
        },
      ],
    },
    {
      title: 'App Settings',
      pages: [
        {
          name: 'Notifications',
          action: () => navigation.push('Notifications'),
        },
        {
          name: 'Preferences',
          action: () => navigation.push('Preferences'),
        },
      ],
    },
    {
      title: 'Support',
      pages: [
        {
          name: 'How Barbago Works',
          action: () => navigation.push('About'),
        },
        {
          name: 'Contact',
          action: () => navigation.push('Contact'),
        },
        {
          name: 'Feedback',
          action: () => navigation.push('Feedback'),
        },
      ],
    },
    {
      title: 'Legal',
      pages: [
        {
          name: 'Terms of Service',
          action: () => navigation.push('TOS'),
        },
        {
          name: 'Privacy Policy',
          action: () => navigation.push('Privacy'),
        },
      ],
    },
  ];

  return (
    <Screen style={{ alignItems: 'stretch' }}>
      <ScrollView>
        {options.map(({ title, pages }, index) => (
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
            {pages.map(({ name, action }, index) => (
              <ListItem
                bottomDivider
                containerStyle={{
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                }}
                onPress={action}
                key={index}
              >
                <ListItem.Content>
                  <ListItem.Title style={{ color: colors.text }}>
                    {name}
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

interface IOption {
  title: string;
  pages: { name: string; action: () => void }[];
}
