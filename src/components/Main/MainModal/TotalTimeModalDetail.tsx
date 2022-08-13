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
      top: 40,
      bottom: 0,
      width: '222px',
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
  return (
    <>
      <S.PeriodTitle>2000년 00월 00일 - 2000년 00월 00일 에는</S.PeriodTitle>
      <S.TitleWrapper>
        <S.Title>000시간 00분을 사용하셨네요!</S.Title>
        <S.TimeLabel>지난주보다 20분 ↑</S.TimeLabel>
        <ReactECharts option={option} style={{ height: '168px' }} />
      </S.TitleWrapper>
    </>
  );
};

export default TotalTimeModalDetail;
