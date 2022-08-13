import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

import * as T from './TotalTimeModal.styled.type';

export const PeriodTitle = styled.div(() => {
  const theme = useTheme();
  return [
    // tw``,
    css`
      margin-bottom: 8px;
      color: ${theme.color['gray-07']};
      font-size: ${theme.fontSize.m};
      font-weight: ${theme.fontWeight.regular};
      line-height: ${theme.lineHeight.l};
    `,
  ];
});

export const TitleWrapper = styled.div(() => {
  const theme = useTheme();
  return [
    tw`flex w-full justify-between items-center`,
    css`
      height: 42px;
      margin-bottom: 30px;
    `,
  ];
});

export const Title = styled.div(() => {
  const theme = useTheme();
  return [
    // tw``,
    css`
      color: ${theme.color['gray-08']};
      font-size: ${theme.fontSize['2xl']};
      font-weight: ${theme.fontWeight.bold};
      line-height: ${theme.lineHeight['3xl']};
    `,
  ];
});

export const TimeLabel = styled.div(() => {
  const theme = useTheme();
  return [
    // tw``,
    css`
      color: ${theme.color['gray-05']};
      font-size: ${theme.fontSize.s};
      font-weight: ${theme.fontWeight.regular};
      line-height: ${theme.lineHeight.m};
    `,
  ];
});

export const SubTitle = styled.div(() => {
  const theme = useTheme();
  return [
    // tw``,
    css`
      margin-bottom: 32px;
      color: ${theme.color['gray-07']};
      font-size: ${theme.fontSize.l};
      font-weight: ${theme.fontWeight.bold};
      line-height: ${theme.lineHeight.xl};
    `,
  ];
});

export const StayTimeListContainer = styled.ul(() => {
  const theme = useTheme();
  return [
    tw`w-full list-none p-0`,
    css`
      margin-bottom: 30px;
    `,
  ];
});

export const StyleTimeListWrapper = styled.li(() => {
  const theme = useTheme();
  return [
    tw`flex justify-between items-center`,
    css`
      height: 74px;
      border-style: solid;
      border-width: 0 0 1px 0;
      border-color: ${theme.color['gray-03']};
    `,
  ];
});

export const StyleTimeListIcon = styled.img(() => {
  const theme = useTheme();
  return [
    // tw``,
    css`
      margin-right: 22px;
      width: 42px;
      height: 42px;
      background-color: ${theme.color['gray-06']};
    `,
  ];
});

export const InformaitonWrapper = styled.div(() => {
  const theme = useTheme();
  return [tw`w-full flex flex-col justify-between`];
});

export const InformationTitle = styled.div(() => {
  const theme = useTheme();
  return [
    tw``,
    css`
      color: ${theme.color['gray-07']};
      font-size: ${theme.fontSize.m};
      font-weight: ${theme.fontWeight.regular};
      line-height: ${theme.lineHeight.l};
    `,
  ];
});

export const InformationTimeBarWrapper = styled.div((props) => {
  return [tw`flex justify-start items-center`];
});

export const InformationTimeBar = styled.div<T.InformationTimeBarProps>(
  (props) => {
    const theme = useTheme();
    return [
      tw``,
      css`
        width: calc(461px * ${props.percent} / 100);
        height: 8px;
        margin-right: 8px;
        background-color: ${props.isActive
          ? theme.color.primary
          : theme.color['gray-04']};
        border-radius: 5px;
      `,
    ];
  }
);

export const InformationTimeBarText = styled.div<T.InformationTimeBarTextProps>(
  (props) => {
    const theme = useTheme();
    return [
      tw``,
      css`
        color: ${props.isActive ? theme.color.primary : theme.color['gray-04']};
        font-size: ${theme.fontSize.xs};
        font-weight: ${theme.fontWeight.regular};
        line-height: ${theme.lineHeight.xs};
      `,
    ];
  }
);
