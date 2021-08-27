import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, InputProps } from 'react-native-elements';
import { IconType } from 'react-native-elements/dist/icons/Icon';
import { useTheme } from '@react-navigation/native';

type ThemedInputProps = {
  iconName?: string;
  iconType?: IconType;
} & InputProps;

const ThemedInput: React.FC<ThemedInputProps> = ({
  iconName,
  iconType,
  label,
  inputStyle,
  containerStyle,
  ...rest
}) => {
  const { colors } = useTheme();
  return (
    <Input
      leftIcon={{
        type: iconType ?? 'font-awesome',
        color: colors.primary,
        name: iconName,
      }}
      inputContainerStyle={{ borderBottomColor: colors.border }}
      leftIconContainerStyle={{ paddingRight: 10, width: 48 }}
      inputStyle={[styles.input, { color: colors.text }, inputStyle]}
      containerStyle={[styles.container, containerStyle]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {},
  container: { paddingHorizontal: 0 },
});

export default ThemedInput;
