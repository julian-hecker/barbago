// import { DefaultTheme, DarkTheme } from '@react-navigation/native';

// https://medium.com/@sidibemouhamed/add-dark-mode-to-your-react-native-app-1d81f75aa4fa

export const CustomLightTheme = {
  dark: false,
  colors: {
    // ...DefaultTheme.colors,
    primary: '#ff0000',
    background: '#dddddd',
    card: '#ddd',
    text: '#000',
    border: '#000',
    notification: '#ff0000',
  },
};

export const CustomDarkTheme = {
  dark: true,
  colors: {
    // ...DarkTheme.colors,
    primary: '#ff0000',
    background: '#222',
    card: '#333',
    text: '#fff',
    border: '#444',
    notification: '#ff0000',
  },
};
