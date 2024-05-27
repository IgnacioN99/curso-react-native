import React, {useEffect, useState} from 'react';
import {StyledContainer} from '../../../../styles';
import {loadPokemons} from '@utils/api';
import {PokemonDetail} from '@utils/api/types';
import PokemonList from '@components/PokemonList';

const PokedexScreen = () => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (pokemons.length === 0 || loading) {
      (async () => {
        setLoading(false);
        const response = await loadPokemons(nextUrl);
        if (response) {
          setPokemons([...pokemons, ...response.pokemonDetails]);
          setNextUrl(response.nextUrl);
        }
      })();
    }
  });

  return (
    <StyledContainer>
      <PokemonList
        pokemons={pokemons}
        isNext={Boolean(nextUrl)}
        setLoading={setLoading}
      />
    </StyledContainer>
  );
};

export default PokedexScreen;
