import React, {useEffect, useState} from 'react';
import {PokemonScreenNavigationProp} from '../../types';
import {PokemonDetail} from '@utils/api/types';
import {getPokemonDetailByID} from '@utils/api';
import {ScrollView} from 'react-native';
import Header from './components/Header';
import TypePills from './components/TypePills';
import Stats from './components/Stats';

const PokemonScreen = ({route}: {route: PokemonScreenNavigationProp}) => {
  const [pokemon, setPokemon] = useState<PokemonDetail>();

  useEffect(() => {
    if (!pokemon) {
      (async () => {
        const response = await getPokemonDetailByID(route.params.id);
        if (response) {
          setPokemon(response);
        }
      })();
    }
  });

  if (!pokemon) {
    return null;
  }

  return (
    <ScrollView>
      <Header pokemon={pokemon} />
      <TypePills types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
};

export default PokemonScreen;
