import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { CarStatus } from '../../components/CarStatus';
import { HomeHeader } from '../../components/HomeHeader';
import { useQuery } from '../../libs/realm';
import { Historic } from '../../libs/realm/schemas/Historic';
import { Container, Content } from './styles';

export function Home() {
  const { navigate } = useNavigation();

  const historic = useQuery(Historic);

  function fetchVehicle() {
    console.log(historic);
  }
  useEffect(() => {
    fetchVehicle();
  }, []);

  function handleRegisterMovement() {
    navigate('departure');
  }
  return (
    <Container>
      <HomeHeader />
      <Content>
        <CarStatus licensePlate='XXX-000' onPress={handleRegisterMovement} />
      </Content>
    </Container>
  );
}
