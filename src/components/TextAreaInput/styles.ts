import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  width: 100%;
  height: 150px;

  padding: 16px;
  border-radius: 6px;

  background: ${theme.COLORS.GRAY_700};
`;

export const Label = styled.Text`
  color: ${theme.COLORS.GRAY_300};
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`;

export const Input = styled.TextInput`
  color: ${theme.COLORS.GRAY_200};
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};

  vertical-align: top;

  margin-top: 16px;
`;
