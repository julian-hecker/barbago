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

import ContextProvider from './context';
import {
  Home,
  Search,
  Settings,
  Messages,
  Login,
  Signup,
  Welcome,
  Contact,
  Feedback,
} from './screens';
import { CustomLightTheme, CustomDarkTheme, linking, setRouteIcons } from './utils';

const RootStack = createStackNavigator();

const App = () => {
  const navRef = useRef<NavigationContainerRef>(null);
  const scheme = useColorScheme();

  return (
    <ContextProvider>
      <StatusBar style="auto" />
      <NavigationContainer
        ref={navRef}
        theme={scheme === 'dark' ? CustomDarkTheme : CustomLightTheme}
        linking={linking}
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
          <RootStack.Screen name="Contact" component={Contact} />
          <RootStack.Screen name="Feedback" component={Feedback} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};

const MainTabs = createBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <MainTabs.Navigator screenOptions={setRouteIcons}>
      <MainTabs.Screen name="Home" component={Home} />
      <MainTabs.Screen name="Search" component={Search} />
      <MainTabs.Screen name="Messages" component={Messages} />
      <MainTabs.Screen name="Settings" component={Settings} />
    </MainTabs.Navigator>
  );
};

export default registerRootComponent(App);

// To do:
// Deep Linking with React Navigation https://www.youtube.com/watch?v=_fVNt1KjkEk
// Form Validation for Contact Form, PersonalInfo pages.
// User Accounts in Firebase Database
// Letting Barbers set up their accounts.
