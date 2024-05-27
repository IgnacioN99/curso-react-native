import {PokemonDetail} from '@utils/api/types';
import {Dispatch, SetStateAction} from 'react';

export type PokemonListProps = {
  pokemons: PokemonDetail[];
  isNext: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
