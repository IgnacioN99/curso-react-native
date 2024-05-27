import {TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {PokemonCardProps} from './types';
import {
  StyledCard,
  StyledImage,
  StyledNameText,
  StyledNumberText,
  StyledDataContainer,
} from './styles';
import {getTypeColor} from './utils';
import {capitalize} from 'lodash';
import {useNavigation} from '@react-navigation/native';
import {PokedexScreenNavigationProp} from '@navigation/screens/Pokedex/types';
const PokemonCard = ({pokemon}: PokemonCardProps) => {
  const navigation = useNavigation<PokedexScreenNavigationProp>();
  const goToPokemon = () => {
    navigation.navigate('Pokemon', {id: pokemon.id});
  };
  const pokemonColor = getTypeColor(pokemon.type);
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <StyledCard>
        <StyledDataContainer $bgcolor={pokemonColor}>
          <StyledNumberText>
            #{`${pokemon.order}`.padStart(3, '0')}
          </StyledNumberText>
          <StyledNameText>{capitalize(pokemon.name)}</StyledNameText>
          <StyledImage source={{uri: pokemon.imagen}} />
        </StyledDataContainer>
      </StyledCard>
    </TouchableWithoutFeedback>
  );
};

export default PokemonCard;
