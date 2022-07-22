import React from 'react';

import * as S from './MostVisitWebSite.styled';
import * as Card from '../../../components/Commons/Card.styled';

type Props = {};

const MostVisitWebSite = (props: Props) => {
  return (
    <Card.Wrapper margin="0 0 40px 0" borderRadius="8px">
      <Card.Title>많이 방문한 웹사이트</Card.Title>
      <S.ItemCardWrapper>
        <S.ItemCard backgroundColor="gray-02"></S.ItemCard>
        <S.ItemCard backgroundColor="gray-02"></S.ItemCard>
        <S.ItemCard backgroundColor="gray-02"></S.ItemCard>
      </S.ItemCardWrapper>
    </Card.Wrapper>
  );
};

export default MostVisitWebSite;
