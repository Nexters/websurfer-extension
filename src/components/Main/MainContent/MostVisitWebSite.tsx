import React from 'react';

import { useAppDispatch } from '@redux/store';

import * as S from './MostVisitWebSite.styled';
import * as Card from '@components/Commons/Card.styled';
import { openModal } from '@redux/common';

type Props = {};

const MostVisitWebSite = (props: Props) => {
  const dispatch = useAppDispatch();

  const requestOpenModal = () => {
    dispatch(openModal('mostVisit'));
  };

  return (
    <Card.Wrapper
      margin="0 0 40px 0"
      height="238px"
      borderRadius="8px"
      onClick={requestOpenModal}
    >
      <Card.Title margin="0 0 24px 0">많이 방문한 웹사이트</Card.Title>
      <S.ItemCardWrapper>
        <S.ItemCard primary>
          <S.ItemCardTitle primary>Pinterest</S.ItemCardTitle>
          <S.ItemCardCount primary>190회</S.ItemCardCount>
        </S.ItemCard>
        <S.ItemCard>
          <S.ItemCardTitle>해쭈 [HAEJOO] - YouTube</S.ItemCardTitle>
          <S.ItemCardCount>123회</S.ItemCardCount>
        </S.ItemCard>
        <S.ItemCard>
          <S.ItemCardTitle>UX 북마크 #20. UX 방법론 A-Z</S.ItemCardTitle>
          <S.ItemCardCount>86회</S.ItemCardCount>
        </S.ItemCard>
      </S.ItemCardWrapper>
    </Card.Wrapper>
  );
};

export default MostVisitWebSite;
