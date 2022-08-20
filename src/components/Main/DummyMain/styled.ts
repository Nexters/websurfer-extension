import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

import { RankListContainer } from '../MainContent/TotalTime.styled';

export const DummyWrapper = styled.div(() => {
  return [
    css`
      padding-top: 24px;
      height: calc(100vh - 24px);
    `,
  ];
});

export const DummyTopWrapper = styled.div(() => {
  const theme = useTheme();
  return [
    css`
      background: ${theme.color.white};
      height: 35%;
    `,
  ];
});

export const DummyContentWrapper = styled.div(() => {
  return [
    css`
      max-width: 1320px;
      min-width: 1320px;
      margin: 0 auto;
    `,
  ];
});

export const DummyTopContetnWrapper = styled(DummyContentWrapper)(() => {
  return [tw`flex flex-col justify-between h-full`];
});

export const Flex = styled.div(() => [
  tw`flex`,
  css`
    padding-top: 32px;
  `,
]);

export const DummyBottonWrapper = styled.div(() => {
  const theme = useTheme();
  return [
    css`
      background: ${theme.color.bgColor};
      height: 65%;
    `,
  ];
});

export const DummyDashboardWrapper = styled.div(() => {
  return [
    css`
      width: 70%;
    `,
  ];
});

export const Justify = styled.div(() => {
  return [
    tw`flex justify-between`,
    css`
      margin-bottom: 20px;
    `,
  ];
});

export const DummyTopNavWrapper = styled.div(() => {
  return [
    tw`
      flex justify-between items-center relative
      `,
    css`
      height: 42px;
      margin-bottom: 9px;
    `,
  ];
});

export const DummyTitleWrapper = styled.div(() => {
  return [
    tw`
      flex justify-between items-end relative
      `,
    css`
      width: '100%';
      height: 342px;
      overflow: hidden;
    `,
  ];
});

export const SubTitle = styled.div(() => {
  const theme = useTheme();
  return [
    css`
      font-size: ${theme.fontSize['2xl']};
      line-height: ${theme.lineHeight['3xl']};
      color: ${theme.color['gray-06']};
    `,
  ];
});

export const Title = styled.div(() => {
  const theme = useTheme();
  return [
    css`
      font-size: ${theme.fontSize['5xl']};
      color: ${theme.color['gray-08']};
      line-height: 67.2px; //theme에 정의 X
      font-weight: 800; //theme에 정의 X
    `,
  ];
});

export const Description = styled.div(() => {
  const theme = useTheme();
  return [
    css`
      color: ${theme.color['gray-06']};
      font-size: ${theme.fontSize.m};
      font-weight: ${theme.fontWeight.regular};
      line-height: ${theme.lineHeight.l};
    `,
  ];
});

export const MainImage = styled.img((props) => {
  return [
    css`
      width: 408px;
      height: 263px;
      margin: 89px 12px -10px 0;
    `,
  ];
});

export const TitleContainer = styled.div(() => [
  css`
    height: 352px;
    padding-top: 110px;
  `,
]);

export const Icon = styled.img(() => {
  return [
    css`
      width: 24px;
      height: 24px;
      margin-left: 8px;
    `,
  ];
});

export const TitleWrapper = styled.div(() => {
  return [
    css`
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      justify-content: start;
    `,
  ];
});

export const GoogleLogin = styled.div(() => {
  const theme = useTheme();
  return [
    tw`
      cursor-pointer
    `,
    css`
      width: max-content;
      border-radius: 20px;
      padding: 10px 20px;
      margin-top: 50px;
      border: 1px solid ${theme.color['gray-03']};
      color: ${theme.color['gray-06']};
      font-weight: ${theme.fontWeight.bold};
    `,
  ];
});

export const DummyRankListContainer = styled(RankListContainer)(() => [
  tw`w-full`,
]);
