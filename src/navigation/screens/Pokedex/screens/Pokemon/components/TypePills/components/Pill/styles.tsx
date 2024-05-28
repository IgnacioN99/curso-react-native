import {styled} from 'styled-components/native';

export const StyledTypePill = styled.View<{$color: string}>`
  background-color: ${({$color}) => $color};
  border-radius: 20px;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
`;
