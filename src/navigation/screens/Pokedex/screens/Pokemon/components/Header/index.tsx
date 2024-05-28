import React from 'react';
import {PokemonHeaderProps} from './types';
import {getTypeColor} from '@components/PokemonCard/utils';
import {
  StyledBgContainer,
  StyledImgContainer,
  StyledPokemonBG,
  StyledPokemonContainer,
  StyledPokemonHeader,
  StyledPokemonImage,
  StyledPokemonName,
  StyledPokemonOrder,
} from './styles';
import {capitalize} from 'lodash';

const Header = ({pokemon}: PokemonHeaderProps) => {
  const color = getTypeColor(pokemon.types[0].type.name);

  return (
    <>
      <StyledBgContainer>
        <StyledPokemonBG $bgcolor={color} />
      </StyledBgContainer>
      <StyledPokemonContainer>
        <StyledPokemonHeader>
          <StyledPokemonName>{capitalize(pokemon.name)}</StyledPokemonName>
          <StyledPokemonOrder>
            #{`${pokemon.order}`.padStart(3, '0')}
          </StyledPokemonOrder>
        </StyledPokemonHeader>
        <StyledImgContainer>
          <StyledPokemonImage source={{uri: pokemon.imagen}} />
        </StyledImgContainer>
      </StyledPokemonContainer>
    </>
  );
};

export default Header;
