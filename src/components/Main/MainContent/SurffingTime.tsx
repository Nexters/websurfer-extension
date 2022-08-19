import React, { useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';
import ReactECharts from 'echarts-for-react';
import { useAppDispatch } from '@redux/store';
import { openModal } from '@redux/common';

import { StatResponse } from '@redux/webSerfer.type';

import * as Card from '@components/Commons/Card.styled';

type Props = { statData?: StatResponse };

const SurffingTime = ({ statData }: Props) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [chartData, setChartData] = useState<any[]>();

  const timeData = statData
    ? [
        statData.morningDuration,
        statData.daytimeDuration,
        statData.dinnerDuration,
        statData.nightDuration,
      ]
    : [];

  const maxValue = Math.max(...timeData);

  const printChartData = () => {
    const data = timeData.map((value) => {
      if (value === maxValue) {
        return { value, itemStyle: { color: theme.color.primary } };
      } else {
        return value;
      }
    });
    setChartData(data);
  };

  useEffect(() => {
    if (statData) {
      printChartData();
    }
  }, [statData]);

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
        data: chartData,
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
        silent: false,
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
    <Card.Wrapper
      height="250px"
      width="290px"
      borderRadius="8px"
      onClick={() => {
        dispatch(openModal('frequency'));
      }}
    >
      <Card.Title>자주 사용한 시간대</Card.Title>
      <ReactECharts option={option} style={{ height: '168px' }} />
    </Card.Wrapper>
  );
};

export default SurffingTime;
