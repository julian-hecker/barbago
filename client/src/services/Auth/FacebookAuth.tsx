import React, { useContext, useEffect } from 'react';
import { ResponseType } from 'expo-auth-session';
import { useAuthRequest } from 'expo-auth-session/providers/facebook';
import { maybeCompleteAuthSession } from 'expo-web-browser';
import firebase from 'firebase/app';

import { Button } from '../../components';
import firebaseApp from '../../config/firebase';
import { UserContext } from '../../context';

maybeCompleteAuthSession();

export const FacebookAuthComponent = () => {
  const { setUser } = useContext(UserContext);
  const [request, response, promptAsync] = useAuthRequest({
    responseType: ResponseType.Token,
    clientId: '3025265811132416',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      const credential =
        firebase.auth.FacebookAuthProvider.credential(access_token);
      firebaseApp
        .auth()
        .signInWithCredential(credential)
        .then((res) => {
          const profile = res.additionalUserInfo?.profile!;
          setUser(profile);
        })
        .catch((err) => console.error(err));
    }
  }, [response]);
  return (
    <Button
      disabled={!request}
      title="Continue with Facebook"
      onPress={() => {
        promptAsync();
      }}
    />
  );
};

// https://docs.expo.io/guides/authentication/#facebook
// https://developers.facebook.com/apps/3025265811132416/fb-login/settings/
