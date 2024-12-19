import React from 'react';
import { Container, Slogan, Title } from './styles';

import backgroundImg from '../assets/background.png';
import { Button } from '../components/Button';

export function Signin() {
  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>

      <Button title='Entrar com Google' />
    </Container>
  );
}
