import {StyledWhiteText} from '@navigation/styles';
import styled from 'styled-components/native';

export const StyledCard = styled.View`
  flex: 1;
  height: 130px;
  padding: 10px;
`;

export const StyledImage = styled.Image`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 90px;
  height: 90px;
`;

export const StyledDataContainer = styled.View<{$bgcolor: string}>`
  background-color: ${({$bgcolor}) => $bgcolor};
  flex: 1;
  border-radius: 15px;
  padding: 10px;
`;

export const StyledNumberText = styled(StyledWhiteText)`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 11px;
`;

export const StyledNameText = styled(StyledWhiteText)`
  font-weight: bold;
  font-size: 15px;
  padding-top: 10px;
`;
