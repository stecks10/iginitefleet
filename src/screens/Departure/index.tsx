import { useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { LicensePlateInput } from '../../components/LicensePlateInput';
import { TextAreaInput } from '../../components/TextAreaInput';
import { Container, Content } from './styles';

export function Departure() {
  const descriptionRef = useRef<TextInput>(null);

  const keyboardAvoidViewBehavior =
    Platform.OS === 'ios' ? 'padding' : 'height';

  function handleDepartureRegister() {
    console.log('Departure registered');
  }

  return (
    <Container>
      <Header title='Saída' />
      <KeyboardAvoidingView behavior={keyboardAvoidViewBehavior} enabled>
        <ScrollView>
          <Content>
            <LicensePlateInput
              label='Placa do veículo'
              placeholder='ABC-1234'
              onSubmitEditing={() => descriptionRef.current?.focus()}
              returnKeyType='next'
            />

            <TextAreaInput
              ref={descriptionRef}
              label='Finalidade'
              placeholder='Vou utilizar o carro para ...'
              onSubmitEditing={handleDepartureRegister}
              returnKeyType='send'
              blurOnSubmit
            />

            <Button title='Registrar Saída' onPress={handleDepartureRegister} />
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}
