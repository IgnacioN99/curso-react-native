import React from 'react';
import {StatsProps} from './types';
import {StyledStatsContainer, StyledStatsTitle} from './styles';
import Stat from './components/Stat';

const Stats = ({stats}: StatsProps) => {
  return (
    <StyledStatsContainer>
      <StyledStatsTitle>Stats</StyledStatsTitle>
      {stats.map((stat, index) => (
        <Stat key={index} stat={stat} />
      ))}
    </StyledStatsContainer>
  );
};

export default Stats;
