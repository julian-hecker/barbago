import React, { useContext } from 'react';
import { ViewStyle } from 'react-native';

import { Screen, Redirect } from '.';
import { UserContext } from '../context';

type ProtectedScreenProps = {
  route?: string;
  condition?: boolean;
  style?: ViewStyle;
  onRedirect?: () => any;
};

const ProtectedScreen: React.FC<ProtectedScreenProps> = ({
  children,
  route,
  condition,
  style,
  onRedirect,
}) => {
  const user = useContext(UserContext);
  return (
    <Screen style={style}>
      <Redirect
        route={route}
        condition={condition ?? !user}
        onRedirect={onRedirect}
      />
      {children}
    </Screen>
  );
};

export default ProtectedScreen;
