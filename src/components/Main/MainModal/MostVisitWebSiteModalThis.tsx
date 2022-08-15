import React from 'react';

import { useAppSelector } from '@redux/store';
import { dashboardStatSelector } from '@redux/dashboard';

import * as S from './MostVisitWebSIteModal.Styled';
import * as Card from '@components/Main/MainContent/MostVisitWebSite.styled';

type Props = {};

const MostVisitWebSiteModalThis = (props: Props) => {
  const statData = useAppSelector(dashboardStatSelector);

  return statData ? (
    <>
      <S.PeriodTitle>2000년 00월 00일 - 2000년 00월 00일 에는</S.PeriodTitle>
      <S.Title>
        {statData.mostVisitedWebsites[0].website.name} 에 자주 방문하셨네요!
      </S.Title>

      <Card.ItemCardWrapper style={{ marginBottom: '20px' }}>
        {statData.mostVisitedWebsites.map((value, index) => {
          const primary = index === 0 ? true : false;

          if (index < 3) {
            return (
              <Card.ItemCard
                href={`https://${value.website.hostname}`}
                target="_blank"
                key={index}
                primary={primary}
              >
                <Card.ItemCardTitle primary={primary}>
                  {value.website.name}
                </Card.ItemCardTitle>
                <Card.ItemCardCount primary={primary}>
                  {value.amount}회
                </Card.ItemCardCount>
              </Card.ItemCard>
            );
          }
        })}
      </Card.ItemCardWrapper>

      {statData.mostVisitedWebsites.map(
        (value, index) =>
          index > 3 && (
            <S.SiteListContainer
              key={index}
              href={`https://${value.website.hostname}`}
              target="_blank"
            >
              <S.SiteInformationWrapper>
                <S.SiteListNumber>{index + 1}</S.SiteListNumber>
                <S.SiteListIcon />
                <S.SiteListTitle>{value.website.name}</S.SiteListTitle>
              </S.SiteInformationWrapper>
              <S.SiteListCount>{value.amount}회</S.SiteListCount>
            </S.SiteListContainer>
          )
      )}
    </>
  ) : (
    <></>
  );
};

export default MostVisitWebSiteModalThis;
