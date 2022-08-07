import React from 'react';

import * as Card from '../../../components/Commons/Card.styled';
import * as S from './TotalTime.styled';

type Props = {};

const TotalTime = (props: Props) => {
  return (
    <Card.Wrapper height="250px" width="510px" borderRadius="8px">
      <Card.Title>총 사용 시간</Card.Title>
      <S.Time>140</S.Time>
      <S.Minute>min</S.Minute>
    </Card.Wrapper>
  );
};

export default TotalTime;
