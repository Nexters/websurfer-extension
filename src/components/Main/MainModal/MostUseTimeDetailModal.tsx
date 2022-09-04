import React, { useState } from 'react';

import { useTheme } from '@emotion/react';
import ReactECharts from 'echarts-for-react';

import PeriodSelector from './PeriodSelector';
import { useAppSelector } from '@redux/store';
import {
  dashboardStatPrevSelector,
  dashboardStatSelector,
} from '@redux/dashboard';

import { printYyyymmddMonday, printYyyymmddSunday } from '@utils/printTime';

import { FilterType } from './MostVisitWebSIteModal.type';

import * as S from './TotalTimeModal.styled';

type Props = {
  period: 'last' | 'this' | 'select';
};

const MostUseTimeDetailModal = (props: Props) => {
  const theme = useTheme();

  const statData = useAppSelector(dashboardStatSelector);
  const statPrevData = useAppSelector(dashboardStatPrevSelector);

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

  const printMostUseTime = (() => {
    if (printData) {
      const {
        morningDuration,
        daytimeDuration,
        dinnerDuration,
        nightDuration,
      } = printData;
      const array = [
        { name: 'morning', value: morningDuration },
        { name: 'day', value: daytimeDuration },
        { name: 'dinner', value: dinnerDuration },
        { name: 'night', value: nightDuration },
      ];
      const maxValue = Math.max(...array.map((item) => item.value));
      const findMaxValue = (time: { name: string; value: number }) =>
        time.value === maxValue;

      const result = array.find(findMaxValue);

      switch (result?.name) {
        case 'morning':
          return '아침(07-12시)';
        case 'day':
          return '낯(13-17시)';
        case 'dinner':
          return '저녁(18-24시)';
        case 'night':
          return '밤(00-06시)';
        default:
          break;
      }
    }
  })();

  const timeChartData = (() =>
    printData && [
      printData.duration3,
      printData.duration4,
      printData.duration5,
      printData.duration6,
      printData.duration7,
      printData.duration8,
      printData.duration9,
      printData.duration10,
      printData.duration11,
      printData.duration0,
      printData.duration1,
      printData.duration2,
    ])();

  const option = {
    grid: {
      left: '30px',
      top: 90,
      bottom: 0,
      width: '650px',
      height: '250px',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none',
      },

      formatter: function (params: any) {
        var tar = params[0];
        return (
          '시간 : ' +
          tar.name +
          '시' +
          '<br/>' +
          '사용 횟수 : ' +
          tar.value +
          '회'
        );
      },
    },
    xAxis: {
      type: 'category',
      data: [
        '06',
        '08',
        '10',
        '12',
        '14',
        '16',
        '18',
        '20',
        '22',
        '24',
        '02',
        '04',
      ],
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
        data: timeChartData,
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
        barGap: '23px',
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

  const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterType>({
    startDate: undefined,
    endDate: undefined,
  });

  return (
    <>
      <S.PeriodTitle>
        {printYyyymmddMonday(printDate)} - {printYyyymmddSunday(printDate)} 에는
      </S.PeriodTitle>
      <S.TitleWrapper>
        <S.Title>{printMostUseTime}에 웹서핑을 자주 하셨네요!</S.Title>
      </S.TitleWrapper>
      <ReactECharts
        option={option}
        style={{
          width: 740,
          height: 400,
          border: `1px solid ${theme.color['gray-03']}`,
          marginBottom: '30px',
        }}
      />
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

export default MostUseTimeDetailModal;
