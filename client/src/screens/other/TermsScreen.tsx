import React from 'react';

import {
  Header,
  Paragraph,
  TextScreen,
  Text,
  Spacer,
} from '../../components';

const TermsScreen = () => {
  return (
    <TextScreen>
      <Header style={{ marginTop: 0 }}>
        Barbago Terms of Service
      </Header>
      <Paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Quaerat maiores distinctio corporis? Excepturi perferendis
        possimus at consectetur porro, quis maxime!
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
        ipsa.
      </Paragraph>
      <Spacer />
      <Header>More Terms and Stuff</Header>
    </TextScreen>
  );
};

export default TermsScreen;
