import React from 'react';

import * as S from './MostVisitWebSIteModal.Styled';
import * as Card from '@components/Main/MainContent/MostVisitWebSite.styled';

import { CalendarIcon } from '@assets/img/svg-icon-paths';

type Props = {};

const dummy = ['', '', '', '', '', '', ''];

const MostVisitWebSiteModalPeriod = (props: Props) => {
  return (
    <>
      <S.SelectPeriodContainer>
        <S.SelectPeriodWrapper>
          <S.SelectPeriodTime>
            2022년 00월 00일 - 2020년 00월 00일
          </S.SelectPeriodTime>
          <S.SelectPeriodIcon src={CalendarIcon} alt="select period" />
        </S.SelectPeriodWrapper>
        <S.PeriodTitle style={{ margin: 'auto 8px' }}>에는</S.PeriodTitle>
      </S.SelectPeriodContainer>
      <S.Title>Site name 에 자주 방문하셨네요!</S.Title>

      <Card.ItemCardWrapper style={{ marginBottom: '20px' }}>
        <Card.ItemCard primary>
          <Card.ItemCardTitle primary>Pinterest</Card.ItemCardTitle>
          <Card.ItemCardCount primary>190회</Card.ItemCardCount>
        </Card.ItemCard>
        <Card.ItemCard>
          <Card.ItemCardTitle>해쭈 [HAEJOO] - YouTube</Card.ItemCardTitle>
          <Card.ItemCardCount>123회</Card.ItemCardCount>
        </Card.ItemCard>
        <Card.ItemCard>
          <Card.ItemCardTitle>UX 북마크 #20. UX 방법론 A-Z</Card.ItemCardTitle>
          <Card.ItemCardCount>86회</Card.ItemCardCount>
        </Card.ItemCard>
      </Card.ItemCardWrapper>

      {dummy.map((value, index) => (
        <S.SiteListContainer>
          <S.SiteInformationWrapper>
            <S.SiteListNumber>{index + 4}</S.SiteListNumber>
            <S.SiteListIcon />
            <S.SiteListTitle>
              site fsdfs dkjfskd fjskdlfjsekldfjs kfsdkl fjdsklfjsdkl
              fjsdsdfsdfsdfs dfsdf sdfsdfsdfsd fsdkfjslf sdjflsdj fsdlkjfslkj
            </S.SiteListTitle>
          </S.SiteInformationWrapper>
          <S.SiteListCount>0000회</S.SiteListCount>
        </S.SiteListContainer>
      ))}
    </>
  );
};

export default MostVisitWebSiteModalPeriod;
