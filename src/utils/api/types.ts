import {PokemonColor} from '../constants';

export type PokemonData = {
  name: string;
  url: string;
};

export type PokemonResponse = {
  count: number;
  next: string;
  previous: string;
  results: PokemonData[];
};

export type PokemonDetail = {
  id: number;
  name: string;
  type: PokemonColor;
  order: number;
  imagen: string;
};

export type PokemonDetailResponse = {
  id: number;
  name: string;
};
