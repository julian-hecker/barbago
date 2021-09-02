import React, { useEffect } from 'react';
import { useIdTokenAuthRequest } from 'expo-auth-session/providers/google';
import { maybeCompleteAuthSession } from 'expo-web-browser';

import { Button } from '../../components';
import { auth, firebaseApp } from '../../config/firebase';

type GoogleAuthComponentProps = {
  onSuccess?: () => any;
};

maybeCompleteAuthSession();

export const GoogleAuthComponent: React.FC<GoogleAuthComponentProps> =
  ({ onSuccess }) => {
    const [request, response, promptAsync] = useIdTokenAuthRequest({
      clientId:
        '826208380986-b35gmhcidcsm9415okp8tj8nrj63ehhr.apps.googleusercontent.com',
    });

    useEffect(() => {
      if (response?.type === 'success') {
        const { id_token } = response.params;
        const credential =
          auth.GoogleAuthProvider.credential(id_token);
        firebaseApp
          .auth()
          .signInWithCredential(credential)
          .then((_res) => {
            onSuccess?.();
          })
          .catch((err) => console.error(err));
      }
    }, [response]);
    return (
      <Button
        disabled={!request}
        title="Continue with Google"
        onPress={() => {
          promptAsync();
        }}
      />
    );
  };

// https://medium.com/nerd-for-tech/apple-google-authentication-in-expo-apps-using-firebase-997125440032
// https://docs.expo.io/guides/authentication/#google
// https://console.cloud.google.com/apis/credentials?project=barbago-859cf
