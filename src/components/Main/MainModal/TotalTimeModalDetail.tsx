import React, { useState } from 'react';

import dayjs from 'dayjs';
import { useTheme } from '@emotion/react';
import ReactECharts from 'echarts-for-react';
import PeriodSelector from './PeriodSelector';
import { useAppSelector } from '@redux/store';
import { minuteToHourMinute } from '@utils/printTime';
import { dashboardStatSelector } from '@redux/dashboard';

import { FilterType } from './MostVisitWebSIteModal.type';

import * as S from './TotalTimeModal.styled';

type Props = {
  period: 'last' | 'this' | 'select';
};

const TotalTimeModalDetail = (props: Props) => {
  const DATE_FORMAT = 'YYYY[년] MM[월] DD[일]';

  const theme = useTheme();
  const statData = useAppSelector(dashboardStatSelector);

  const option = {
    grid: {
      left: '12px',
      right: '12px',
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
        console.log(params);
        return '날짜 : ' + tar.name + '<br/>' + '사용량(분) : ' + tar.value;
      },
    },
    xAxis: {
      type: 'category',
      data: ['00.00', '00.00', '00.00', '00.00', '00.00', '00.00', '00.00'],
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
        data: [
          200,
          200,
          200,
          200,
          200,
          200,
          {
            value: 200,
            itemStyle: {
              normal: { color: theme.color.primary },
              emphasis: { color: theme.color.secondaryB },
            },
          },
        ],
        itemStyle: {
          color: theme.color.secondaryB,
          barBorderRadius: [5, 5, 0, 0],
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
          {props.period === 'select' ? (
            <S.SelectPeriodContainer
              onClick={() => {
                setIsFilterActive(!isFilterActive);
              }}
            >
              <S.SelectPeriodWrapper
                isActive={filter.startDate && filter.endDate ? true : false}
              >
                <S.SelectPeriodTime
                  isActive={filter.startDate && filter.endDate ? true : false}
                >
                  {filter.startDate && filter.endDate
                    ? dayjs(filter.startDate).format(DATE_FORMAT) +
                      ' - ' +
                      dayjs(filter.endDate).format(DATE_FORMAT)
                    : '2022년 00월 00일 - 2020년 00월 00일'}
                </S.SelectPeriodTime>
                <S.SelectPeriodIcon
                  isActive={filter.startDate && filter.endDate ? true : false}
                />
              </S.SelectPeriodWrapper>
              <S.PeriodTitle style={{ margin: 'auto 8px' }}>에는</S.PeriodTitle>
            </S.SelectPeriodContainer>
          ) : (
            <S.PeriodTitle>
              2000년 00월 00일 - 2000년 00월 00일 에는
            </S.PeriodTitle>
          )}
          <S.TitleWrapper>
            <S.Title>
              {`${minuteToHourMinute(statData.totalDuration, 'hourminute')}`}을
              사용하셨네요!
            </S.Title>
            <S.TimeLabel>지난주보다 20분 ↑</S.TimeLabel>
          </S.TitleWrapper>
          <ReactECharts
            option={option}
            style={{
              width: 740,
              border: `1px solid ${theme.color['gray-03']}`,
              marginBottom: '30px',
            }}
          />
          <S.SubTitle>사이트별 체류시간</S.SubTitle>
          <S.StayTimeListContainer>
            {statData.mostDurationWebsites.map((value, index) => (
              <S.StyleTimeListWrapper key={index}>
                <S.StyleTimeListIcon
                  src={value.website.faviconUrl}
                  alt={value.website.name}
                />
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
                      {minuteToHourMinute(value.amount, 'hourminute')}
                    </S.InformationTimeBarText>
                  </S.InformationTimeBarWrapper>
                </S.InformaitonWrapper>
              </S.StyleTimeListWrapper>
            ))}
          </S.StayTimeListContainer>
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
