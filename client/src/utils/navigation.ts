import { LinkingOptions } from '@react-navigation/native';
import { makeUrl } from 'expo-linking';

export const prefix = makeUrl('/');

// https://reactnavigation.org/docs/configuring-links/
export const linking: LinkingOptions = {
  prefixes: [prefix],
  config: {
    screens: {
      Login: 'login',
      Signup: 'signup',
      Welcome: 'welcome',
      Contact: 'contact',
      Feedback: 'feedback',
      Main: {
        screens: {
          Home: {
            screens: {
              Home: '',
            },
          },
          Search: {
            screens: {
              Search: 'search',
            },
          },
          Messages: {
            screens: {
              Messages: 'messages',
            },
          },
          Settings: {
            path: 'settings/',
            screens: {
              Settings: '',
              Personal: 'personal',
              Payment: 'payment',
              Notifications: 'notifications',
              Preferences: 'preferences',
              TOS: 'tos',
              Privacy: 'privacy',
            },
          },
        },
      },
    },
  },
};
