import React, { useRef } from 'react';
import { useColorScheme } from 'react-native-appearance';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ContextProvider from './context';
import {
  Home,
  Search,
  Settings,
  Messages,
  Login,
  Signup,
  Welcome,
} from './screens';
import { LightTheme, DarkTheme } from './utils';
import {
  MainTabParams,
  RootStackScreenProps,
} from './types/navigation';

const RootStack = createStackNavigator();

const App = () => {
  const navRef = useRef<NavigationContainerRef>(null);
  const scheme = useColorScheme();

  return (
    <ContextProvider>
      <StatusBar style="auto" />
      <NavigationContainer
        ref={navRef}
        theme={scheme === 'dark' ? DarkTheme : LightTheme}
      >
        <RootStack.Navigator mode="modal" headerMode="float">
          <RootStack.Screen
            name="Main"
            options={{ headerShown: false }}
            component={MainTabScreen}
          />
          <RootStack.Screen name="Login" component={Login} />
          <RootStack.Screen name="Signup" component={Signup} />
          <RootStack.Screen name="Welcome" component={Welcome} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};

const MainTabs = createBottomTabNavigator<MainTabParams>();

const MainTabScreen = ({
  navigation,
  route,
}: RootStackScreenProps) => {
  return (
    <MainTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Messages':
              iconName = 'chat';
              break;
            case 'Search':
              iconName = 'magnify';
              break;
            case 'Settings':
              iconName = 'cog';
              break;
            default:
              return null;
          }
          return (
            <MaterialCommunityIcons
              name={iconName as any}
              size={24}
              color={color}
            />
          );
        },
      })}
    >
      <MainTabs.Screen name="Home" component={Home} />
      <MainTabs.Screen name="Search" component={Search} />
      <MainTabs.Screen name="Messages" component={Messages} />
      <MainTabs.Screen name="Settings" component={Settings} />
    </MainTabs.Navigator>
  );
};

export default registerRootComponent(App);
