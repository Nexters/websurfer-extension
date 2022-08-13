import React from 'react';

import { useTheme } from '@emotion/react';
import ReactECharts from 'echarts-for-react';

import * as S from './TotalTimeModal.styled';

type Props = {
  period: 'last' | 'this' | 'select';
};

const TotalTimeModalDetail = (props: Props) => {
  const theme = useTheme();
  const option = {
    grid: {
      left: '12px',
      right: '12px',
      top: 100,
      bottom: 0,
      width: '740px',
      height: '110px',
    },
    xAxis: {
      type: 'category',
      data: ['아침', '낮', '저녁', '밤'],
      axisLabel: {
        color: theme.color.black,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: theme.color.secondaryB,
        },
      },
      axisTick: false,
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false,
      },
      axisLabel: false,
    },
    series: [
      {
        data: [
          100,
          100,
          {
            value: 120,
            itemStyle: { color: theme.color.primary },
          },
          100,
        ],
        itemStyle: {
          color: theme.color.secondaryB,
          barBorderRadius: [5, 5, 0, 0],
        },
        type: 'bar',
        silent: true,
        barWidth: '30px',
        barGap: '34px',
        markPoint: {
          data: [
            {
              type: 'max',
              itemStyle: { color: theme.color.secondaryY },
              label: { show: false },
            },
          ],
          symbol: 'circle',
          symbolSize: 30,
          symbolOffset: [0, -20],
        },
      },
    ],
  };

  const dummy = ['', '', '', '', '', '', '', ''];
  return (
    <>
      <S.PeriodTitle>2000년 00월 00일 - 2000년 00월 00일 에는</S.PeriodTitle>
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
    </>
  );
};

export default TotalTimeModalDetail;
