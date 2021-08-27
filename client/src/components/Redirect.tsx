import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type RedirectProps = {
  condition: boolean;
  route?: string;
  onRedirect?: () => any;
};

const Redirect: React.FC<RedirectProps> = ({
  condition,
  route,
  onRedirect,
}) => {
  const navigation = useNavigation();
  useEffect(() => {
    if (condition) {
      if (onRedirect) onRedirect();
      navigation.goBack();
      if (route) navigation.navigate(route);
    }
  }, []);
  return <View style={{ display: 'none' }}></View>;
};

export default Redirect;
