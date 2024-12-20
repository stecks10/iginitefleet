import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useState } from 'react';
import backgroundImg from '../assets/background.png';
import { Button } from '../components/Button';
import { Container, Slogan, Title } from './styles';

import { IOS_CLIENT_ID, WEB_CLIENT_ID } from '@env';
import { Alert } from 'react-native';

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
});

export function Signin() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticating(true);

      const { idToken } = await GoogleSignin.signIn();

      if (!idToken) {
      } else {
        Alert.alert('Não foi possível realizar o login');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível realizar o login');
      setIsAuthenticating(false);
    }
  }

  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>

      <Button
        title='Entrar com Google'
        isLoading={isAuthenticating}
        onPress={handleGoogleSignIn}
      />
    </Container>
  );
}
