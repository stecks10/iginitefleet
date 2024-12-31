import { useRef, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { LicensePlateInput } from '../../components/LicensePlateInput';
import { TextAreaInput } from '../../components/TextAreaInput';
import { licensePlateValidate } from '../../utils/licensePlateValidate';
import { Container, Content } from './styles';

export function Departure() {
  const [description, setDescription] = useState('');
  const [licensePlate, setLicensePlate] = useState('');

  const descriptionRef = useRef<TextInput>(null);
  const licensePlateRef = useRef<TextInput>(null);

  const keyboardAvoidViewBehavior =
    Platform.OS === 'ios' ? 'padding' : 'height';

  function handleDepartureRegister() {
    if (!licensePlateValidate(licensePlate)) {
      licensePlateRef.current?.focus();
      return Alert.alert(
        'Placa invalida',
        'A placa é invalida. Por favor, informe a placa correta do veículo.'
      );
    }
    if (description.trim().length === 0) {
      descriptionRef.current?.focus();
      return Alert.alert(
        'Finalidade inválida',
        'Por favor, informe a finalidade do veículo.'
      );
    }
  }

  return (
    <Container>
      <Header title='Saída' />
      <KeyboardAvoidingView behavior={keyboardAvoidViewBehavior} enabled>
        <ScrollView>
          <Content>
            <LicensePlateInput
              ref={licensePlateRef}
              label='Placa do veículo'
              placeholder='ABC-1234'
              onSubmitEditing={() => descriptionRef.current?.focus()}
              returnKeyType='next'
              onChangeText={setLicensePlate}
            />

            <TextAreaInput
              ref={descriptionRef}
              label='Finalidade'
              placeholder='Vou utilizar o carro para ...'
              onSubmitEditing={handleDepartureRegister}
              returnKeyType='send'
              submitBehavior='blurAndSubmit'
              onChangeText={setDescription}
            />

            <Button title='Registrar Saída' onPress={handleDepartureRegister} />
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}
