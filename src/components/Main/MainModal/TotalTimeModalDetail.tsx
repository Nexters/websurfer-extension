import React, { useState } from 'react';

import dayjs from 'dayjs';
import { useTheme } from '@emotion/react';
import ReactECharts from 'echarts-for-react';
import PeriodSelector from './PeriodSelector';

import { useAppSelector } from '@redux/store';
import { hasLastWeekDataSelector } from '@redux/common';
import { dashboardStatSelector } from '@redux/dashboard';
import {
  printYyyymmddM7,
  printYyyymmddToday,
  secondsToHourMinute,
} from '@utils/printTime';

import { StatResponse } from '@redux/webSerfer.type';
import { FilterType } from './MostVisitWebSIteModal.type';

import * as S from './TotalTimeModal.styled';

type Props = {
  period: 'last' | 'this' | 'select';
};

const TotalTimeModalDetail = (props: Props) => {
  const DATE_FORMAT = 'YYYY[년] MM[월] DD[일]';

  const theme = useTheme();
  const statData: StatResponse | undefined = useAppSelector(
    dashboardStatSelector
  );
  const hasLastWeekData = useAppSelector(hasLastWeekDataSelector);

  const option = {
    grid: {
      left: '30px',
      top: 50,
      bottom: 0,
      width: '650px',
      height: '200px',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none',
      },
      formatter: function (params: any) {
        var tar = params[0];
        return '날짜 : ' + tar.name + '<br/>' + '사용량(분) : ' + tar.value;
      },
      borderColor: theme.color['gray-04'],
      borderWidth: 1,
    },
    xAxis: {
      type: 'category',
      data: ['08.09', '08.10', '08.11', '08.12', '08.13', '08.14', '08.15'],
      axisLabel: {
        color: theme.color.black,
      },
      axisLine: {
        show: true,
        lineStyle: {
          normal: {
            color: theme.color.secondaryB,
          },
        },
      },
      axisTick: false,
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: true,
      },
      position: 'right',
    },
    series: [
      {
        data: [300, 600, 1000, 50, 70, 180, 800],
        itemStyle: {
          normal: {
            color: theme.color.secondaryB,
            barBorderRadius: [5, 5, 0, 0],
          },
          emphasis: {
            color: theme.color.primary,
            barBorderRadius: [5, 5, 0, 0],
          },
        },
        type: 'bar',
        silent: true,
        barWidth: '52px',
        barGap: '42px',
      },
    ],
  };

  const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterType>({
    startDate: undefined,
    endDate: undefined,
  });

  return (
    <>
      {statData && (
        <>
          <S.PeriodTitle>
            {printYyyymmddM7} - {printYyyymmddToday} 에는
          </S.PeriodTitle>
          <S.TitleWrapper>
            <S.Title>
              {`${secondsToHourMinute(statData.totalDuration, 'hourminute')}`}을
              사용하셨네요!
            </S.Title>
            <S.TimeLabel>{hasLastWeekData && '지난주보다 20분 ↑'}</S.TimeLabel>
          </S.TitleWrapper>
          <ReactECharts
            option={option}
            style={{
              width: 740,
              border: `1px solid ${theme.color['gray-03']}`,
              marginBottom: '30px',
            }}
          />
          {statData?.mostDurationWebsites?.[0] && (
            <>
              <S.SubTitle>사이트별 체류시간</S.SubTitle>
              <S.StayTimeListContainer>
                {statData.mostDurationWebsites.map((value, index) => (
                  <S.StyleTimeListWrapper key={index}>
                    <S.Link
                      href={`https://${value.website.hostname}`}
                      target="_blank"
                    >
                      <S.StyleTimeListIcon
                        src={value.website.faviconUrl}
                        alt={value.website.name}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src = `${'./assets/basic_favicon_196.png'}`;
                        }}
                      />
                    </S.Link>
                    <S.InformaitonWrapper>
                      <S.InformationTitle
                        href={`https://${value.website.hostname}`}
                        target="_blank"
                      >
                        {value.website.name}
                      </S.InformationTitle>
                      <S.InformationTimeBarWrapper>
                        <S.InformationTimeBar
                          percent={
                            (value.amount /
                              statData.mostDurationWebsites[0].amount) *
                            100
                          }
                        />

                        <S.InformationTimeBarText>
                          {secondsToHourMinute(value.amount, 'hourminute')}
                        </S.InformationTimeBarText>
                      </S.InformationTimeBarWrapper>
                    </S.InformaitonWrapper>
                  </S.StyleTimeListWrapper>
                ))}
              </S.StayTimeListContainer>
            </>
          )}
          {isFilterActive && (
            <PeriodSelector
              filter={filter}
              setFilter={setFilter}
              setIsFilterActive={setIsFilterActive}
            />
          )}
        </>
      )}
    </>
  );
};

export default TotalTimeModalDetail;
