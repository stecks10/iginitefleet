import { Power } from 'phosphor-react-native';
import { Container, Greeting, Message, Name, Picture } from './styles';

import { TouchableOpacity } from 'react-native';
import theme from '../../theme';
export function HomeHeader() {
  return (
    <Container>
      <Picture
        source={{ uri: 'https://github.com/stecks10.png' }}
        placeholder='blank'
      />
      <Greeting>
        <Message>Olá, </Message>
        <Name>Lucas</Name>
      </Greeting>

      <TouchableOpacity>
        <Power size={32} color={theme.COLORS.GRAY_400} />
      </TouchableOpacity>
    </Container>
  );
}
