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

const MostUseTimeDetailModal = (props: Props) => {
  const DATE_FORMAT = 'YYYY[년] MM[월] DD[일]';

  const theme = useTheme();

  const option = {
    grid: {
      left: '12px',
      right: '12px',
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
        console.log(params);
        return '날짜 : ' + tar.name + '<br/>' + '사용량(분) : ' + tar.value;
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
        data: [
          180,
          180,
          180,
          180,
          180,
          180,
          {
            value: 180,
            itemStyle: {
              normal: { color: theme.color.primary },
              emphasis: { color: theme.color.secondaryB },
            },
          },
          {
            value: 200,
            itemStyle: {
              normal: { color: theme.color.primary },
              emphasis: { color: theme.color.secondaryB },
            },
          },
          {
            value: 180,
            itemStyle: {
              normal: { color: theme.color.primary },
              emphasis: { color: theme.color.secondaryB },
            },
          },
          180,
          180,
          180,
        ],
        itemStyle: {
          color: theme.color.secondaryB,
          barBorderRadius: [5, 5, 0, 0],
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
        <S.Title>저녁(18-24시)에 웹서핑을 자주 하셨네요!</S.Title>
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
