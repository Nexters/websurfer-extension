import React, { useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';
import ReactECharts from 'echarts-for-react';
import { useAppDispatch } from '@redux/store';
import { openModal } from '@redux/common';
import printChartData from '@utils/printChartData';

import { StatResponse } from '@redux/webSerfer.type';

import * as Card from '@components/Commons/Card.styled';

import morningIcon from '@assets/img/icon-time-morning.png';
import dayIcon from '@assets/img/icon-time-day.png';
import dinnerIcon from '@assets/img/icon-time-dinner.png';
import nightIcon from '@assets/img/icon-time-night.png';

type Props = { statData?: StatResponse };

const SurffingTime = ({ statData }: Props) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [maxIcon, setMaxIcon] = useState<string>(dayIcon);

  const timeData = statData
    ? [
        statData.morningDuration,
        statData.daytimeDuration,
        statData.dinnerDuration,
        statData.nightDuration,
      ]
    : [];

  const maxValue = Math.max(...timeData);

  const selectMaxIcon = () => {
    const fromIndex = timeData.indexOf(maxValue);

    switch (fromIndex) {
      case 0:
        setMaxIcon(morningIcon);
        break;
      case 1:
        setMaxIcon(dayIcon);
        break;
      case 2:
        setMaxIcon(dinnerIcon);
        break;
      case 3:
        setMaxIcon(nightIcon);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (statData) {
      selectMaxIcon();
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
        data: printChartData(timeData, theme.color.primary),
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
        barWidth: '30px',
        barGap: '34px',
        markPoint: {
          data: [
            {
              type: 'max',
              itemStyle: { color: theme.color.secondaryY },
            },
          ],
          label: { show: false },
          symbol: `image://${maxIcon}`,
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
