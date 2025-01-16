import { useNavigation } from '@react-navigation/native';
import { useUser } from '@realm/react';
import { useRef, useState } from 'react';
import { Alert, ScrollView, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { LicensePlateInput } from '../../components/LicensePlateInput';
import { TextAreaInput } from '../../components/TextAreaInput';
import { useRealm } from '../../libs/realm';
import { Historic } from '../../libs/realm/schemas/Historic';
import { licensePlateValidate } from '../../utils/licensePlateValidate';
import { Container, Content } from './styles';

export function Departure() {
  const [description, setDescription] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const realm = useRealm();
  const user = useUser();
  const descriptionRef = useRef<TextInput>(null);
  const licensePlateRef = useRef<TextInput>(null);
  const { goBack } = useNavigation();

  function handleDepartureRegister() {
    try {
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

      setIsRegistering(true);

      realm.write(() => {
        realm.create(
          'Historic',
          Historic.generate({
            user_id: user!.id,
            license_plate: licensePlate.toUpperCase(),
            description,
          })
        );
      });

      Alert.alert(
        'Saida registrada',
        'A saída do veiculo foi registrada com sucesso.'
      );

      goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Ocorreu um erro ao registrar a saída do veículo.');
      setIsRegistering(false);
    }
  }

  return (
    <Container>
      <Header title='Saída' />
      <KeyboardAwareScrollView extraHeight={100}>
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

            <Button
              title='Registrar Saída'
              onPress={handleDepartureRegister}
              isLoading={isRegistering}
            />
          </Content>
        </ScrollView>
      </KeyboardAwareScrollView>
    </Container>
  );
}
