import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { LicensePlateInput } from '../../components/LicensePlateInput';
import { TextAreaInput } from '../../components/TextAreaInput';
import { Container, Content } from './styles';

export function Departure() {
  return (
    <Container>
      <Header title='Saída' />

      <Content>
        <LicensePlateInput label='Placa do veículo' placeholder='ABC-1234' />

        <TextAreaInput
          label='Finalidade'
          placeholder='Vou utilizar o carro para ...'
        />

        <Button title='Registrar Saída' />
      </Content>
    </Container>
  );
}
