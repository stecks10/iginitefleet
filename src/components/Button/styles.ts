import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.TouchableOpacity`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  background-color: ${theme.COLORS.BRAND_MID};

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.WHITE};
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: theme.COLORS.BRAND_LIGHT,
})``;
