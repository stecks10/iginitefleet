import { TextInputProps } from 'react-native';
import theme from '../../theme';
import { Container, Input, Label } from './styles';

type Props = TextInputProps & {
  label: string;
};

export function TextAreaInput({ label, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>

      <Input
        placeholderTextColor={theme.COLORS.GRAY_400}
        multiline
        autoCapitalize='sentences'
        {...rest}
      />
    </Container>
  );
}
