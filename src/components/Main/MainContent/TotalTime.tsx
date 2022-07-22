import React from 'react';

import * as Card from '../../../components/Commons/Card.styled';

type Props = {};

const TotalTime = (props: Props) => {
  return (
    <Card.Wrapper height="308px" width="400px" borderRadius="8px">
      <Card.Title>총 사용 시간</Card.Title>
    </Card.Wrapper>
  );
};

export default TotalTime;
