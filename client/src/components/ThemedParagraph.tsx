import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';

type ParagraphProps = {
  style?: TextStyle;
};

const ThemedParagraph: React.FC<ParagraphProps> = ({
  children,
  style,
}) => {
  const { colors } = useTheme();

  return (
    <Text style={[styles.text, { color: colors.text }, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
  },
});

export default ThemedParagraph;
