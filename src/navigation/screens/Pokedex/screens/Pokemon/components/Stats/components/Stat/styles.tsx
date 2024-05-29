import {StyledBlackText} from '@navigation/styles';
import {styled} from 'styled-components/native';

export const StyledStatContainer = styled.View`
  flex-direction: row;
  padding: 0 5px;
`;

export const StyledTitleContainer = styled.View`
  width: 30%;
`;

export const StyledStatTitle = styled.Text`
  font-size: 12px;
  color: #6b6b6b;
`;

export const StyledStatBarContainer = styled.View`
  width: 70%;
  flex-direction: row;
  align-items: center;
`;

export const StyledNumber = styled(StyledBlackText)`
  font-size: 12px;
  width: 12%;
`;

export const StyledBgBar = styled.View`
  background-color: '#dedede';
  width: 88%;
  height: 5px;
  border-radius: 20px;
  overflow: hidden;
`;

export const StyledBar = styled.View<{$width: string; $color: string}>`
  background-color: ${({$color}) => $color};
  width: ${({$width}) => $width};
  height: 100%;
  border-radius: 20px;
`;
