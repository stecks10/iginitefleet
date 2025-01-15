import { IconProps } from 'phosphor-react-native';
import { TouchableOpacityProps } from 'react-native';
import theme from '../../theme';
import { Container } from './styles';

export type IconBoxProps = (props: IconProps) => JSX.Element;

type Props = TouchableOpacityProps & {
  icon: IconBoxProps;
};

export function ButtonIcon({ icon: Icon, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Icon size={24} color={theme.COLORS.BRAND_MID} />
    </Container>
  );
}
