import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';

type ThemedTextScreenProps = {
  style?: ViewStyle;
};

const ThemedTextScreen: React.FC<ThemedTextScreenProps> = ({
  children,
  style,
}) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.screen,
        { backgroundColor: colors.background },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
});

export default ThemedTextScreen;
