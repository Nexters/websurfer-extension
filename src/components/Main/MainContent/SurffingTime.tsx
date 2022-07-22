import React from 'react';

import * as Card from '../../../components/Commons/Card.styled';

type Props = {};

const SurffingTime = (props: Props) => {
  return (
    <Card.Wrapper height="308px" width="400px" borderRadius="8px">
      <Card.Title>자주 사용한 시간대</Card.Title>
    </Card.Wrapper>
  );
};

export default SurffingTime;
