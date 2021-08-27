import React from 'react';
import { StyleSheet, ScrollView, ViewStyle } from 'react-native';
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
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
      style={[
        styles.screen,
        { backgroundColor: colors.background },
        style,
      ]}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default ThemedTextScreen;
