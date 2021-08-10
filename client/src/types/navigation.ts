// https://reactnavigation.org/docs/typescript/

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/core';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type MainTabParams = {
  Home: undefined;
  About: undefined;
  Search: undefined;
  Settings: undefined;
  Messages: undefined;
};

export type RootNavParams = {
  Main: undefined;
  Login: undefined;
};

export type SettingsNavParams = {
  Settings: undefined;
  Personal: undefined;
  Payment: undefined;
  Barber: undefined;
  Notifications: undefined;
  Preferences: undefined;
  About: undefined;
  Contact: undefined;
  Feedback: undefined;
  TOS: undefined;
  Privacy: undefined;
};

export type RootStackNavProp = StackNavigationProp<
  RootNavParams,
  'Main'
>;
export type RootStackRouteProp = RouteProp<RootNavParams, 'Main'>;
export type RootStackScreenProps = {
  route: RootStackRouteProp;
  navigation: RootStackNavProp;
};

export type MainTabNavProp = BottomTabNavigationProp<MainTabParams>;
export type MainTabRouteProp = RouteProp<MainTabParams, 'Home'>;
export type MainTabScreenProps = {
  route: MainTabRouteProp;
  navigation: MainTabNavProp;
};

export type MainTabScreenNavProp = CompositeNavigationProp<
  RootStackNavProp,
  MainTabNavProp
>;

export type SettingStackNavProp =
  StackNavigationProp<SettingsNavParams>;
export type SettingStackRouteProp = RouteProp<
  SettingsNavParams,
  'Settings'
>;
export type SettingStackRouteScreenProp = {
  route: SettingStackRouteProp;
  navigation: SettingStackNavProp;
};
export type SettingScreenNavProp = CompositeNavigationProp<
  MainTabScreenNavProp,
  SettingStackNavProp
>;
