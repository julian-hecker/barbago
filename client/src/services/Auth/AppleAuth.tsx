import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import {
  signInAsync,
  isAvailableAsync,
  AppleAuthenticationScope,
  AppleAuthenticationButton,
  AppleAuthenticationButtonStyle,
  AppleAuthenticationButtonType,
} from 'expo-apple-authentication';
import {
  digestStringAsync,
  CryptoDigestAlgorithm,
} from 'expo-crypto';

import { firebaseApp, auth } from '../../config/firebase';

export const appleSignIn = async () => {
  const nonce = Math.random().toString(36).substring(2, 10);
  const hashedNonce = await digestStringAsync(
    CryptoDigestAlgorithm.SHA256,
    nonce,
  );
  try {
    const appleCredential = await signInAsync({
      requestedScopes: [
        AppleAuthenticationScope.FULL_NAME,
        AppleAuthenticationScope.EMAIL,
      ],
      nonce: hashedNonce,
    });
    const { identityToken } = appleCredential;
    const provider = new auth.OAuthProvider('apple.com');
    const credential = provider.credential({
      idToken: identityToken!,
      rawNonce: nonce,
    });
    return firebaseApp.auth().signInWithCredential(credential);
  } catch (err) {
    if (err.code === 'ERR_CANCELED') {
      console.error('canceled', err);
    } else {
      console.error(err);
    }
  }
};

export const AppleAuthComponent = () => {
  const [isAppleReady, setIsAppleReady] = useState(false);

  useEffect(() => {
    isAvailableAsync().then(setIsAppleReady);
  }, []);

  return (
    <>
      {isAppleReady ? (
        <AppleAuthenticationButton
          buttonStyle={AppleAuthenticationButtonStyle.WHITE}
          buttonType={AppleAuthenticationButtonType.SIGN_IN}
          cornerRadius={0}
          onPress={appleSignIn}
          style={{
            width: Dimensions.get('screen').width - 32,
            height: 50,
          }}
        />
      ) : null}
    </>
  );
};

// https://medium.com/nerd-for-tech/apple-google-authentication-in-expo-apps-using-firebase-997125440032
