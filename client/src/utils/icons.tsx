import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const setRouteIcons = ({ route }: any) => ({
  tabBarIcon: ({ color, focused, size }: any) => {
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
});
