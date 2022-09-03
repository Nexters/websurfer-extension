import React from 'react';

import { useAppSelector } from '@redux/store';
import { printYyyymmddMonday, printYyyymmddSunday } from '@utils/printTime';
import {
  dashboardStatPrevSelector,
  dashboardStatSelector,
} from '@redux/dashboard';

import * as S from './MostVisitWebSIteModal.Styled';
import * as Card from '@components/Main/MainContent/MostVisitWebSite.styled';
import NoDataModal from './NoDataModal';

type Props = { period: string | number };

const MostVisitWebSiteModalContent = (props: Props) => {
  const statData = useAppSelector(dashboardStatSelector);
  const statPrevData = useAppSelector(dashboardStatPrevSelector);

  const printData = () => {
    switch (props.period) {
      case 'this':
        return statData && statData;
      case 'last':
        return statPrevData && statPrevData;
      default:
        break;
    }
  };

  const printDate = () => {
    switch (props.period) {
      case 'this':
        return 0;
      case 'last':
        return -1;
      default:
        return 0;
    }
  };

  return printData() && printData().mostVisitedWebsites[0] ? (
    <>
      <S.PeriodTitle>
        {printYyyymmddMonday(printDate())} - {printYyyymmddSunday(printDate())}{' '}
        에는
      </S.PeriodTitle>
      <S.Title>
        {printData().mostVisitedWebsites[0].website.name} 에 자주 방문하셨네요!
      </S.Title>

      <Card.ItemCardWrapper style={{ marginBottom: '20px' }}>
        {statData.mostVisitedWebsites.map((value, index) => {
          const primary = false;

          if (index < 3) {
            return (
              <Card.ItemCard
                href={`https://${value.website.hostname}`}
                target="_blank"
                key={index}
                primary={primary}
              >
                <S.TopSiteListIcon
                  src={value.website.faviconUrl}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = `./assets/basic_favicon_32.png`;
                  }}
                />
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

      {printData().mostVisitedWebsites.map(
        (value, index) =>
          index >= 3 && (
            <S.SiteListContainer
              key={index}
              href={`https://${value.website.hostname}`}
              target="_blank"
            >
              <S.SiteInformationWrapper>
                <S.SiteListNumber>{index + 1}</S.SiteListNumber>
                <S.SiteListIcon
                  src={value.website.faviconUrl}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = `./assets/basic_favicon_32.png`;
                  }}
                />
                <S.SiteListTitle>{value.website.name}</S.SiteListTitle>
              </S.SiteInformationWrapper>
              <S.SiteListCount>{value.amount}회</S.SiteListCount>
            </S.SiteListContainer>
          )
      )}
    </>
  ) : (
    <NoDataModal />
  );
};

export default MostVisitWebSiteModalContent;
