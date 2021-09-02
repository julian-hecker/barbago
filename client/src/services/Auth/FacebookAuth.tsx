import React, { useEffect } from 'react';
import { ResponseType } from 'expo-auth-session';
import { useAuthRequest } from 'expo-auth-session/providers/facebook';
import { maybeCompleteAuthSession } from 'expo-web-browser';

import { Button } from '../../components';
import { auth, firebaseApp } from '../../config/firebase';

maybeCompleteAuthSession();

export const FacebookAuthComponent = () => {
  const [request, response, promptAsync] = useAuthRequest({
    responseType: ResponseType.Token,
    clientId: '3025265811132416',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      const credential =
        auth.FacebookAuthProvider.credential(access_token);
      firebaseApp
        .auth()
        .signInWithCredential(credential)
        .then((res) => {
          const profile = res.additionalUserInfo?.profile!;
          console.log(profile);
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
// https://derk-jan.com/2020/05/expo-facebook-login/
