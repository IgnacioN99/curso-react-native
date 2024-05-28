import React from 'react';
import {TypePillProps} from './types';
import {StyledPillsContainer} from './styles';
import Pill from './components/Pill';

const TypePills = ({types}: TypePillProps) => {
  return (
    <StyledPillsContainer>
      {types.map((type, index) => (
        <Pill key={index} type={type} />
      ))}
    </StyledPillsContainer>
  );
};

export default TypePills;
