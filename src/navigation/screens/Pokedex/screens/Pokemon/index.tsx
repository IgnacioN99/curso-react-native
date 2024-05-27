import React, {useEffect, useState} from 'react';
import {StyledContainer, StyledText} from '../../../../styles';
import {PokemonScreenNavigationProp} from '../../types';
import {PokemonDetailResponse} from '@utils/api/types';
import {getPokemonDetailByID} from '@utils/api';

const PokemonScreen = ({route}: {route: PokemonScreenNavigationProp}) => {
  const [pokemon, setPokemon] = useState<PokemonDetailResponse>();
  console.log('id', route.params.id);

  useEffect(() => {
    if (!pokemon) {
      (async () => {
        const response = await getPokemonDetailByID(route.params.id);
        if (response) {
          setPokemon(response.data);
        }
      })();
    }
  });

  if (!pokemon) {
    return null;
  }
  return (
    <StyledContainer>
      <StyledText>{pokemon.name}</StyledText>
      <StyledText>PokemonScreen</StyledText>
      <StyledText>PokemonScreen</StyledText>
    </StyledContainer>
  );
};

export default PokemonScreen;
