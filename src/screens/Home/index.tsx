import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { CarStatus } from '../../components/CarStatus';
import { HomeHeader } from '../../components/HomeHeader';
import { useQuery } from '../../libs/realm';
import { Historic } from '../../libs/realm/schemas/Historic';
import { Container, Content } from './styles';

export function Home() {
  const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null);
  const { navigate } = useNavigation();

  const historic = useQuery(Historic);

  function fetchVehicle() {
    try {
      const vehicle = historic.filtered('status = "departure"')[0];

      setVehicleInUse(vehicle);
    } catch (error) {
      Alert.alert('Veículo', 'Nenhum veículo em uso');
      console.log(error);
    }
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
        <CarStatus
          licensePlate={vehicleInUse?.license_plate}
          onPress={handleRegisterMovement}
        />
      </Content>
    </Container>
  );
}
