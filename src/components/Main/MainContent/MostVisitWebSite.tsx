import React from 'react';

import { openModal } from '@redux/common';
import { useAppDispatch } from '@redux/store';

import * as S from './MostVisitWebSite.styled';
import * as Card from '@components/Commons/Card.styled';

import { StatResponse } from '@redux/webSerfer.type';

type Props = { statData: StatResponse };

const MostVisitWebSite = ({ statData }: Props) => {
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
        {statData.mostVisitedWebsites.map((value, index) => {
          const primary = false;

          if (index < 3) {
            return (
              <S.ItemCard key={index} primary={primary}>
                <S.ItemCardTitle primary={primary}>
                  {value.website.name}
                </S.ItemCardTitle>
                <S.ItemCardCount primary={primary}>
                  {value.amount}회
                </S.ItemCardCount>
              </S.ItemCard>
            );
          }
        })}
      </S.ItemCardWrapper>
    </Card.Wrapper>
  );
};

export default MostVisitWebSite;
