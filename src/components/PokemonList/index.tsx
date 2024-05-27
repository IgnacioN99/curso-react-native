import React from 'react';
import {PokemonListProps} from './types';
import {FlatList, StyleSheet} from 'react-native';
import PokemonCard from '@components/PokemonCard';
import {StyledSpinner} from './styles';

const PokemonList = ({pokemons, isNext, setLoading}: PokemonListProps) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon, index) => String(index)}
      renderItem={({item}) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext ? () => setLoading(true) : undefined}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext ? <StyledSpinner size="large" color="#AEAEAE" /> : null
      }
    />
  );
};
export default PokemonList;

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
