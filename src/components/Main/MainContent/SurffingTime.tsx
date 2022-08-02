import React from 'react';
import ReactECharts from 'echarts-for-react';

import { useTheme } from '@emotion/react';

import * as Card from '../../../components/Commons/Card.styled';
import echarts from 'echarts/types/dist/echarts';

type Props = {};

const SurffingTime = (props: Props) => {
  const theme = useTheme();
  const option = {
    grid: {
      left: '10%',
      right: '10%',
      top: 10,
      bottom: 20,
    },
    xAxis: {
      type: 'category',
      data: ['아침', '낮', '저녁', '밤'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [
          100,
          100,
          { value: 100, itemStyle: { color: theme.color.primary } },
          100,
        ],
        itemStyle: {
          color: theme.color.secondaryB,
          barBorderRadius: [5, 5, 0, 0],
        },
        type: 'bar',
        silent: true,
      },
    ],
  };
  return (
    <Card.Wrapper height="308px" width="400px" borderRadius="8px">
      <Card.Title>자주 사용한 시간대</Card.Title>
      <ReactECharts
        option={option}
        style={{ height: '200px', width: 'auto' }}
      />
    </Card.Wrapper>
  );
};

export default SurffingTime;
