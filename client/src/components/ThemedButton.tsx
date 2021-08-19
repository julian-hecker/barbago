import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Button, ButtonProps } from 'react-native-elements';

const ThemedButton: React.FC<ButtonProps> = ({ ...rest }) => {
  const { colors } = useTheme();
  return (
    <Button
      type="clear"
      titleStyle={{
        color: colors.primary,
        textDecorationLine: 'underline',
      }}
      {...rest}
    />
  );
};

export default ThemedButton;
