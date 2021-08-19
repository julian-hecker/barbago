import React, { forwardRef } from 'react';
import { Modalize, ModalizeProps } from 'react-native-modalize';
import { useTheme } from '@react-navigation/native';

// https://www.carlrippon.com/react-forwardref-typescript/
// https://reactjs.org/docs/forwarding-refs.html
const ThemedModal = forwardRef<Modalize, ModalizeProps>(
  ({ children, ...rest }, ref) => {
    const { colors } = useTheme();
    return (
      <Modalize
        ref={ref}
        handlePosition="inside"
        modalTopOffset={200}
        disableScrollIfPossible={true}
        alwaysOpen={75}
        modalStyle={{ backgroundColor: colors.card, padding: 16 }}
        handleStyle={{ backgroundColor: colors.border }}
        {...rest}
      >
        {children}
      </Modalize>
    );
  },
);

export default ThemedModal;
