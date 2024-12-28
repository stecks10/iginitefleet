import { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import theme from '../../theme';
import { Container, Input, Label } from './styles';

type Props = TextInputProps & {
  label: string;
};

const TextAreaInput = forwardRef<TextInput, Props>(
  ({ label, ...rest }, ref) => {
    return (
      <Container>
        <Label>{label}</Label>

        <Input
          ref={ref}
          placeholderTextColor={theme.COLORS.GRAY_400}
          multiline
          autoCapitalize='sentences'
          {...rest}
        />
      </Container>
    );
  }
);

export { TextAreaInput };
