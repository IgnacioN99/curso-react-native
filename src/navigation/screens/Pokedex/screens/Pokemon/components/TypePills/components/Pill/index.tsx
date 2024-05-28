import React from 'react';
import {StyledTypePill} from './styles';
import {capitalize} from 'lodash';
import {PillProps} from './types';
import {getTypeColor} from '@components/PokemonCard/utils';
import {StyledWhiteText} from '@navigation/styles';

const Pill = ({type}: PillProps) => {
  const color = getTypeColor(type.type.name);
  return (
    <StyledTypePill $color={color}>
      <StyledWhiteText>{capitalize(type.type.name)}</StyledWhiteText>
    </StyledTypePill>
  );
};

export default Pill;
