import React from 'react';

import MainContent from '../../components/Main/MainContent/MainContent';

import * as Grid from '../../components/Grid/Grid.styled';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col margin="55px 0 60px 0" unit={8}>
          <MainContent />
        </Grid.Col>
        <Grid.Col margin="60px 0" unit={4}>
          right
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
};

export default Options;
