import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { CarStatus } from '../../components/CarStatus';
import { HistoricCard } from '../../components/HistoricCard';
import { HomeHeader } from '../../components/HomeHeader';
import { useQuery, useRealm } from '../../libs/realm';
import { Historic } from '../../libs/realm/schemas/Historic';
import { Container, Content } from './styles';

export function Home() {
  const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null);
  const { navigate } = useNavigation();

  const historic = useQuery(Historic);
  const realm = useRealm();

  function fetchVehicleInUse() {
    try {
      const vehicle = historic.filtered('status = "departure"')[0];

      setVehicleInUse(vehicle);
    } catch (error) {
      Alert.alert('Veículo', 'Nenhum veículo em uso');
      console.log(error);
    }
  }

  function fetchHistoric() {
    const response = historic.filtered(
      "status = 'arrival' SORT(created_at DESC)"
    );
    console.log(response);
  }

  useEffect(() => {
    fetchVehicleInUse();
  }, []);

  useEffect(() => {
    realm.addListener('change', () => {
      fetchVehicleInUse();
    });
    return () => {
      realm.removeListener('change', fetchVehicleInUse);
    };
  }, []);

  useEffect(() => {
    fetchHistoric();
  }, [historic]);

  function handleRegisterMovement() {
    if (vehicleInUse?._id) {
      return navigate('arrival', { id: vehicleInUse._id.toString() });
    } else {
      return navigate('departure');
    }
  }

  return (
    <Container>
      <HomeHeader />
      <Content>
        <CarStatus
          licensePlate={vehicleInUse?.license_plate}
          onPress={handleRegisterMovement}
        />
        <HistoricCard
          data={{
            created: '01/01/2023',
            licensePlate: 'ABC-1234',
            isSync: false,
          }}
        />
      </Content>
    </Container>
  );
}
