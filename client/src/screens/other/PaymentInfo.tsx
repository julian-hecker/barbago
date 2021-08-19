import React from 'react';

import { ProtectedScreen, Text } from '../../components';

const PaymentInfo = () => {
  return (
    <ProtectedScreen route={'Login'}>
      <Text>Payment</Text>
    </ProtectedScreen>
  );
};

export default PaymentInfo;
