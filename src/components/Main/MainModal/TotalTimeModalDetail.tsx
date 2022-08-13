import React, { useState } from 'react';

import { useTheme } from '@emotion/react';
import ReactECharts from 'echarts-for-react';

import * as S from './TotalTimeModal.styled';
import { FilterType } from './MostVisitWebSIteModal.type';
import dayjs from 'dayjs';
import PeriodSelector from './PeriodSelector';

type Props = {
  period: 'last' | 'this' | 'select';
};

const TotalTimeModalDetail = (props: Props) => {
  const DATE_FORMAT = 'YYYY[년] MM[월] DD[일]';

  const theme = useTheme();

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

  const dummy = ['', '', '', '', '', '', '', ''];

  const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterType>({
    startDate: undefined,
    endDate: undefined,
  });

  return (
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
        <S.PeriodTitle>2000년 00월 00일 - 2000년 00월 00일 에는</S.PeriodTitle>
      )}
      <S.TitleWrapper>
        <S.Title>000시간 00분을 사용하셨네요!</S.Title>
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
        <S.StyleTimeListWrapper>
          <S.StyleTimeListIcon />
          <S.InformaitonWrapper>
            <S.InformationTitle>Site name Site name</S.InformationTitle>
            <S.InformationTimeBarWrapper>
              <S.InformationTimeBar isActive percent={100} />
              <S.InformationTimeBarText isActive>
                000시간 00분
              </S.InformationTimeBarText>
            </S.InformationTimeBarWrapper>
          </S.InformaitonWrapper>
        </S.StyleTimeListWrapper>
        {dummy.map((value, index) => (
          <S.StyleTimeListWrapper key={index}>
            <S.StyleTimeListIcon />
            <S.InformaitonWrapper>
              <S.InformationTitle>Site name Site name</S.InformationTitle>
              <S.InformationTimeBarWrapper>
                <S.InformationTimeBar percent={100 - (index + 1) * 10} />
                <S.InformationTimeBarText>
                  000시간 00분
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
  );
};

export default TotalTimeModalDetail;