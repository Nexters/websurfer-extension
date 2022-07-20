import React from 'react';
import * as Grid from '../../components/Grid/Grid.styled';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col>Grid1</Grid.Col>
        <Grid.Col>Grid2</Grid.Col>
        <Grid.Col>Grid3</Grid.Col>
        <Grid.Col>Grid4</Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
};

export default Options;
