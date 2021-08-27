import React from 'react';
import { Button, ButtonProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const ThemedButton: React.FC<ButtonProps> = ({ type, ...rest }) => {
  const { colors } = useTheme();
  return (
    <Button
      type={type ?? 'clear'}
      titleStyle={{
        color: colors.primary,
        textDecorationLine: 'underline',
      }}
      {...rest}
    />
  );
};

export default ThemedButton;
