import { useRoute } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
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
  return (
    <Container>
      <Header title='Chegada' />
      <Content>
        <Label>Placa do Veiculo</Label>

        <LicensePlate>{id}</LicensePlate>
        <Label>Finalidade</Label>

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel
          laborum corporis. Nobis, adipisci officiis voluptas, eius blanditiis
          magni sequi, iure quos eaque exercitationem alias fugiat. Quas illum
          facere dolore!
        </Description>

        <Footer>
          <Button title='Registrar chegada' />
        </Footer>
      </Content>
    </Container>
  );
}
