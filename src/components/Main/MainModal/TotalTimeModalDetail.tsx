import React, { useState } from 'react';

import dayjs from 'dayjs';
import { useTheme } from '@emotion/react';
import ReactECharts from 'echarts-for-react';
import PeriodSelector from './PeriodSelector';

import { useAppSelector } from '@redux/store';
import {
  dashboardStatPrevSelector,
  dashboardStatSelector,
} from '@redux/dashboard';
import {
  printYyyymmddMonday,
  printYyyymmddSunday,
  secondsToHourMinute,
} from '@utils/printTime';

import { StatResponse } from '@redux/webSerfer.type';
import { FilterType } from './MostVisitWebSIteModal.type';

import * as S from './TotalTimeModal.styled';

type Props = {
  period: 'last' | 'this' | 'select';
};

interface Iacc {
  [key: string]: number;
}

const TotalTimeModalDetail = (props: Props) => {
  const theme = useTheme();
  const statData: StatResponse | undefined = useAppSelector(
    dashboardStatSelector
  );
  const statPrevData = useAppSelector(dashboardStatPrevSelector);
  const hasLastWeekData = useAppSelector(dashboardStatPrevSelector);

  const printData = (() => {
    switch (props.period) {
      case 'this':
        return statData && statData;
      case 'last':
        return statPrevData && statPrevData;
      default:
        return;
    }
  })();

  const printDate = (() => {
    switch (props.period) {
      case 'this':
        return 0;
      case 'last':
        return -1;
      default:
        return 0;
    }
  })();

  const { daiilyReports = [], todayDuration } = printData;

  const dataMap = daiilyReports.reduce(
    (acc: Iacc, value) => {
      const { totalDuration, date: vDate } = value;

      const date = dayjs(vDate).format('MM.DD');

      const existing = acc[date] || 0;

      acc[date] = existing + totalDuration;

      return acc;
    },
    {
      [dayjs().format('MM.DD')]: todayDuration,
    }
  );

  const entries = Object.entries(dataMap).sort((a, b) => {
    return dayjs(a[0]).isBefore(b[0]) ? -1 : 1;
  });

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
      data: entries.length ? entries.map((v) => v[0]) : [],
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
        data: entries.length
          ? entries.map((v) => Number(secondsToHourMinute(v[1], 'minute')))
          : [],
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
      {printData && (
        <>
          <S.PeriodTitle>
            {printYyyymmddMonday(printDate)} - {printYyyymmddSunday(printDate)}{' '}
            에는
          </S.PeriodTitle>
          <S.TitleWrapper>
            <S.Title>
              {`${secondsToHourMinute(printData.totalDuration, 'hourminute')}`}
              을 사용하셨네요!
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
          {printData?.mostDurationWebsites?.[0] && (
            <>
              <S.SubTitle>사이트별 체류시간</S.SubTitle>
              <S.StayTimeListContainer>
                {printData.mostDurationWebsites.map((value, index) => (
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
                        {value.website.name
                          ? value.website.name
                          : value.website.hostname}
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
