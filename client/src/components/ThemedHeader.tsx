import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

type ThemedHeaderProps = {
  style?: TextStyle;
};

const ThemedHeader: React.FC<ThemedHeaderProps> = ({
  children,
  style,
}) => {
  const { colors } = useTheme();
  return (
    <Text style={[styles.header, { color: colors.text }, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ThemedHeader;
