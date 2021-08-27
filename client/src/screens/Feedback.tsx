import { useTheme } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

import { Header, Input, Screen, Text } from '../components';
import { UserContext } from '../context';

const FeedbackScreen = () => {
  const { colors } = useTheme();
  const { user } = useContext(UserContext);

  const [email, setEmail] = useState(user?.email ?? '');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Header>Message the Barbago Team</Header>
        <Text>
          Use the following form to send feedback to our team about
          the application.
        </Text>
        <Input
          label="Email Address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          iconName="envelope"
          placeholder="mail@site.com"
        />
        <Input
          label="Message Subject"
          value={category}
          onChangeText={(text) => setCategory(text)}
          iconName="edit"
          placeholder="Feature Request: Please add more buttons!"
          multiline
        />
        <Input
          label="Message"
          value={message}
          onChangeText={(text) => setMessage(text)}
          iconName="comments"
          placeholder="I think the overall usability of the application would benefit if there were more buttons with text labels. It might really be helpful to those who are new to mobile devices."
          multiline
          style={{ height: 120 }}
        />
        <Button
          title="Send Message"
          buttonStyle={{ backgroundColor: colors.primary }}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: { justifyContent: 'flex-start' },
  container: {
    maxWidth: 600,
    padding: 20,
  },
});

export default FeedbackScreen;
