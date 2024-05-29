import React from 'react';
import {PokemonStatProps} from './types';
import {
  StyledBar,
  StyledBgBar,
  StyledNumber,
  StyledStatBarContainer,
  StyledStatContainer,
  StyledStatTitle,
  StyledTitleContainer,
} from './styles';
import {barStyles} from './utils';

const Stat = ({stat}: PokemonStatProps) => {
  const {backgroundColor, width} = barStyles(stat.base_stat);
  return (
    <StyledStatContainer>
      <StyledTitleContainer>
        <StyledStatTitle>{stat.stat.name}</StyledStatTitle>
      </StyledTitleContainer>
      <StyledStatBarContainer>
        <StyledNumber>{stat.base_stat}</StyledNumber>
        <StyledBgBar>
          <StyledBar $width={width} $color={backgroundColor} />
        </StyledBgBar>
      </StyledStatBarContainer>
    </StyledStatContainer>
  );
};

export default Stat;
