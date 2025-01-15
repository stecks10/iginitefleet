import { useRoute } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from '../../components/Header';

import { X } from 'phosphor-react-native';
import { BSON } from 'realm';
import { useObject } from '../../libs/realm';
import { Historic } from '../../libs/realm/schemas/Historic';
import {
  Container,
  Content,
  Description,
  Footer,
  Label,
  LicensePlate,
} from './styles';

type RouteParamsProps = {
  id: string;
};

export function Arrival() {
  const route = useRoute();
  const { id } = route.params as RouteParamsProps;

  const historic = useObject(Historic, new BSON.UUID(id));

  return (
    <Container>
      <Header title='Chegada' />
      <Content>
        <Label>Placa do Veiculo</Label>

        <LicensePlate>{(historic as Historic)?.license_plate}</LicensePlate>
        <Label>Finalidade</Label>

        <Description>{(historic as Historic)?.description}</Description>

        <Footer>
          <ButtonIcon icon={X} />
          <Button title='Registrar chegada' />
        </Footer>
      </Content>
    </Container>
  );
}
