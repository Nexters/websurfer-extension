import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const TopContainer = styled.div(() => {
  const theme = useTheme();

  return [
    tw`w-full flex justify-between`,
    css`
      height: 52px;
      margin-bottom: 20px;
    `,
  ];
});

export const TitleContainer = styled.div(() => {
  const theme = useTheme();

  return [
    tw`flex flex-col justify-start`,
    css`
      width: 180px;
      height: 52px;
    `,
  ];
});
export const SubTitle = styled.div(() => {
  const theme = useTheme();

  return [
    css`
      color: ${theme.color['gray-05']};
      font-size: ${theme.fontSize.xs};
      font-weight: ${theme.fontWeight.regular};
      line-height: ${theme.lineHeight.l};
    `,
  ];
});

export const UsageTimeContainer = styled.div(() => {
  const theme = useTheme();

  return [
    tw`text-right`,
    css`
      width: 247px;
      height: 52px;
    `,
  ];
});

export const RankListContainer = styled.ol(() => {
  const theme = useTheme();

  return [
    tw`list-none p-0 m-0`,
    css`
      width: 466px;
      height: 144px;
    `,
  ];
});

export const RankList = styled.li(() => {
  const theme = useTheme();

  return [
    tw`flex w-full justify-between items-center`,
    css`
      height: 48px;
      color: ${theme.color['gray-06']};
      border-top: solid 1px ${theme.color['gray-03']};
      :hover {
        color: ${theme.color.primary};
      }
    `,
  ];
});

export const RankListNameWrapper = styled.div(() => {
  const theme = useTheme();

  return [
    tw`flex justify-between items-center`,
    css`
      width: 362px;
    `,
  ];
});

export const Rank = styled.div(() => {
  const theme = useTheme();

  return [
    css`
      width: 15px;
      font-size: ${theme.fontSize.m};
      font-weight: ${theme.fontWeight.bold};
      line-height: ${theme.lineHeight.m};
    `,
  ];
});

export const Site = styled.div(() => {
  const theme = useTheme();

  return [
    css`
      width: 325px;
      font-size: ${theme.fontSize.m};
      font-weight: ${theme.fontWeight.regular};
      line-height: ${theme.lineHeight.l};
    `,
  ];
});

export const UsingTime = styled.div(() => {
  const theme = useTheme();

  return [
    css`
      font-size: ${theme.fontSize.s};
      font-weight: ${theme.fontWeight.regular};
      line-height: ${theme.lineHeight.xs};
    `,
  ];
});

export const Time = styled.div(() => {
  const theme = useTheme();

  return [
    tw`
    inline-block
    `,
    css`
      color: ${theme.color['gray-07']};
      font-size: ${theme.fontSize['6xl']};
      font-weight: ${theme.fontWeight.bold};
      line-height: ${theme.lineHeight['5xl']};
      margin-right: 2px;
    `,
  ];
});

export const TimeLabel = styled.div(() => {
  const theme = useTheme();

  return [
    tw`
      inline-block
      `,
    css`
      color: ${theme.color['gray-07']};
      font-size: ${theme.fontSize.s};
      font-weight: ${theme.fontWeight.regular};
      line-height: ${theme.lineHeight.l};
      margin-right: 8px;
      :last-child {
        margin-right: 0;
      }
    `,
  ];
});
