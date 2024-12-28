import React from 'react';
import { TextInputProps } from 'react-native';
import theme from '../../theme';
import { Container, Input, Label } from './styles';

type Props = TextInputProps & {
  label: string;
};

export function LicensePlateInput({ label, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>

      <Input
        {...rest}
        maxLength={7}
        autoCapitalize='characters'
        placeholderTextColor={theme.COLORS.GRAY_400}
      />
    </Container>
  );
}
