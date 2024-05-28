import {StyledWhiteText} from '@navigation/styles';
import styled from 'styled-components/native';

export const StyledPokemonImage = styled.Image`
  height: 250px;
  width: 300px;
  object-fit: contain;
  overflow: visible;
`;

export const StyledImgContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
`;

export const StyledBgContainer = styled.View`
  width: 100%;
  transform: scaleX(2);
`;

export const StyledPokemonContainer = styled.View`
  padding-top: 45px;
  display: flex;
  width: 100%;
  flex-direction: column;
  z-index: 1;
  overflow: visible;
  gap: 100px;
`;

export const StyledPokemonBG = styled.View<{$bgcolor: string}>`
  background-color: ${({$bgcolor}) => $bgcolor};
  width: 100%;
  height: 400px;
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
  z-index: -1;
  position: absolute;
`;

export const StyledPokemonHeader = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
`;

export const StyledPokemonOrder = styled(StyledWhiteText)`
  font-weight: bold;
`;

export const StyledPokemonName = styled(StyledPokemonOrder)`
  font-size: 27px;
`;
