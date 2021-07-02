import React, { Context } from 'react';
import { useColorScheme } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ContextProvider from './context/index';
import {
  Home,
  About,
  Search,
  Settings,
  MainTabParams,
} from './screens';
import { LightTheme, DarkTheme } from './utils';

const Tab = createMaterialBottomTabNavigator<MainTabParams>();

const App = () => {
  const scheme = useColorScheme();

  return (
    <ContextProvider>
      <NavigationContainer
        theme={scheme === 'dark' ? DarkTheme : LightTheme}
      >
        <StatusBar style="auto" />
        <Tab.Navigator
          // Set icons for each tab
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;
              switch (route.name) {
                case 'Home':
                  iconName = 'home';
                  break;
                case 'About':
                  iconName = 'information';
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
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="About" component={About} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};

export default registerRootComponent(App);
