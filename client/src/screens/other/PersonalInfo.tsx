import React from 'react';
import { ProtectedScreen, Text } from '../../components';

const PersonalInfo = () => {
  return (
    <ProtectedScreen route={'Login'}>
      <Text>Personal</Text>
    </ProtectedScreen>
  );
};

export default PersonalInfo;
