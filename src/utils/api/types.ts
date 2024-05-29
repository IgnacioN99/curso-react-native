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
  types: PokemonDetailType[];
  order: number;
  imagen: string;
  stats: PokemonStat[];
};

export type PokemonDetailType = {
  type: PokemonType;
};

type PokemonType = {
  name: PokemonColor;
  url: string;
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: Stat;
};

type Stat = {
  name: string;
  value: number;
};
