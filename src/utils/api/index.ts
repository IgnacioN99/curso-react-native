import axios from 'axios';
import {PokemonDetail, PokemonResponse} from './types';

export const API_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = async (nextUrl: string | null) => {
  try {
    const url = `${API_URL}/pokemon?limit=20&offset=0`;
    const response = await axios.get<PokemonResponse>(nextUrl || url);
    const result = response.data;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getPokemon = async (url: string) => {
  try {
    const response = await axios.get(url);
    const result = response.data;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const loadPokemons = async (url: string | null) => {
  try {
    const response = await getPokemons(url);
    if (response) {
      const pokemons = response.results;
      const pokemonsDetail = await Promise.all(
        pokemons.map(async pokemon => {
          const detail = await getPokemon(pokemon.url);
          const pokemonDetail: PokemonDetail = {
            id: detail.id,
            name: detail.name,
            types: detail.types,
            order: detail.order,
            imagen: detail.sprites.other['official-artwork'].front_default,
            stats: detail.stats,
          };
          return pokemonDetail;
        }),
      );
      return {pokemonDetails: pokemonsDetail, nextUrl: response.next};
    }
  } catch (error) {
    console.error(error);
  }
};

export const getPokemonDetailByID = async (id: number) => {
  try {
    const url = `${API_URL}/pokemon/${id}`;
    const response = await axios.get(url);
    const detail: PokemonDetail = {
      id: response.data.id,
      name: response.data.name,
      types: response.data.types,
      order: response.data.order,
      imagen: response.data.sprites.other['official-artwork'].front_default,
      stats: response.data.stats,
    };
    return detail;
  } catch (error) {
    throw error;
  }
};
