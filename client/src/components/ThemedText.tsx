import React from 'react';
import { Text, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';

type TextProps = {
  style?: TextStyle;
};

const ThemedText: React.FC<TextProps> = ({ children, style }) => {
  const { colors } = useTheme();

  return (
    <Text style={{ ...style, color: colors.text }}>{children}</Text>
  );
};

export default ThemedText;
