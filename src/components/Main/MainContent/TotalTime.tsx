import React from 'react';

import * as Card from '../../../components/Commons/Card.styled';
import * as S from './TotalTime.styled';

type Props = {};

const TotalTime = (props: Props) => {
  return (
    <Card.Wrapper
      height="250px"
      width="510px"
      padding="22px 22px 12px 22px"
      borderRadius="8px"
    >
      <S.TopContainer>
        <S.TitleContainer>
          <Card.Title margin="0">총 사용 시간</Card.Title>
          <S.SubTitle>지난 주보다 20분 ↑</S.SubTitle>
        </S.TitleContainer>
        <S.UsageTimeContainer>
          <S.Time>140</S.Time>
          <S.TimeLabel>시간</S.TimeLabel>
          <S.Time>00</S.Time>
          <S.TimeLabel>분</S.TimeLabel>
        </S.UsageTimeContainer>
      </S.TopContainer>
      <S.RankListContainer>
        <S.RankList>
          <S.RankListNameWrapper>
            <S.Rank>1</S.Rank>
            <S.Site>site name</S.Site>
          </S.RankListNameWrapper>
          <S.UsingTime>000시간 00분</S.UsingTime>
        </S.RankList>
        <S.RankList>
          <S.RankListNameWrapper>
            <S.Rank>2</S.Rank>
            <S.Site>site name</S.Site>
          </S.RankListNameWrapper>
          <S.UsingTime>000시간 00분</S.UsingTime>
        </S.RankList>
        <S.RankList>
          <S.RankListNameWrapper>
            <S.Rank>3</S.Rank>
            <S.Site>site name</S.Site>
          </S.RankListNameWrapper>
          <S.UsingTime>000시간 00분</S.UsingTime>
        </S.RankList>
      </S.RankListContainer>
    </Card.Wrapper>
  );
};

export default TotalTime;
