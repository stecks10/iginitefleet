import React, { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import theme from '../../theme';
import { Container, Input, Label } from './styles';

type Props = TextInputProps & {
  label: string;
};

const LicensePlateInput = forwardRef<TextInput, Props>(
  ({ label, ...rest }, ref) => {
    return (
      <Container>
        <Label>{label}</Label>

        <Input
          ref={ref}
          {...rest}
          maxLength={7}
          autoCapitalize='characters'
          placeholderTextColor={theme.COLORS.GRAY_400}
        />
      </Container>
    );
  }
);

export { LicensePlateInput };
