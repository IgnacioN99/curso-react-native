import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Favorite: undefined;
  Pokedex: undefined;
};

export type FavoriteScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Favorite'
>;
export type PokedexScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Pokedex'
>;
