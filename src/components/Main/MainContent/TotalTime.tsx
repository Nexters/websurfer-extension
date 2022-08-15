import React from 'react';

import { useAppDispatch } from '@redux/store';
import { openModal } from '@redux/common';

import * as Card from '@components/Commons/Card.styled';
import * as S from './TotalTime.styled';

import { StatResponse } from '@redux/webSerfer.type';
import { minuteToHourMinute } from '@utils/printTime';

type Props = { statData?: StatResponse };

const TotalTime = ({ statData }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {statData && (
        <Card.Wrapper
          height="250px"
          width="510px"
          padding="22px 22px 12px 22px"
          borderRadius="8px"
          onClick={() => {
            dispatch(openModal('totalTime'));
          }}
        >
          <S.TopContainer>
            <S.TitleContainer>
              <Card.Title margin="0">총 사용 시간</Card.Title>
              <S.SubTitle>지난 주보다 20분 ↑</S.SubTitle>
            </S.TitleContainer>
            <S.UsageTimeContainer>
              <S.Time>00</S.Time>
              <S.TimeLabel>시간</S.TimeLabel>
              <S.Time>00</S.Time>
              <S.TimeLabel>분</S.TimeLabel>
            </S.UsageTimeContainer>
          </S.TopContainer>
          <S.RankListContainer>
            {statData.mostDurationWebsites.map(
              (value, index) =>
                index < 3 && (
                  <S.RankList key={index + value.website.name}>
                    <S.RankListNameWrapper>
                      <S.Rank>{index + 1}</S.Rank>
                      <S.Site>{value.website.name}</S.Site>
                    </S.RankListNameWrapper>
                    <S.UsingTime>
                      {/* {minuteToHourMinute(value.amount)} */}
                    </S.UsingTime>
                  </S.RankList>
                )
            )}
          </S.RankListContainer>
        </Card.Wrapper>
      )}
    </>
  );
};

export default TotalTime;
