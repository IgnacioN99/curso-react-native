import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type PokemonScreenProps = {
  id: number;
};

export type PokedexStackParamList = {
  Pokemon: PokemonScreenProps;
  Pokedex: undefined;
};

export type PokemonScreenNavigationProp = RouteProp<
  PokedexStackParamList,
  'Pokemon'
>;
export type PokedexScreenNavigationProp = NativeStackNavigationProp<
  PokedexStackParamList,
  'Pokedex'
>;
