import React from 'react';
import { Modalize, ModalizeProps } from 'react-native-modalize';
import { useTheme } from '@react-navigation/native';

const ThemedModal: React.FC<ModalProps> = ({ children, ...rest }) => {
  const { colors } = useTheme();
  return (
    <Modalize
      handlePosition="inside"
      modalTopOffset={200}
      alwaysOpen={75}
      modalStyle={{ backgroundColor: colors.card, padding: 16 }}
      handleStyle={{ backgroundColor: colors.text }}
      {...rest}
    >
      {children}
    </Modalize>
  );
};

interface ModalProps extends ModalizeProps {
  ref: React.Ref<Modalize>;
}

export default ThemedModal;
