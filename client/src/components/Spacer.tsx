import React from 'react';

import { View } from 'react-native';

type SpacerProps = {
  space?: number;
};

const Spacer: React.FC<SpacerProps> = ({ space }) => {
  return <View style={[{ height: space ?? 10 }]}></View>;
};

export default Spacer;
