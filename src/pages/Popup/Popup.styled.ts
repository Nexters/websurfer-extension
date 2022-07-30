import { css, useTheme } from '@emotion/react';
import { MAX_WIDTH } from '../../components/Grid/Grid.styled';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div(() => {
  return [
    tw`
      flex-col overflow-hidden
    `,
    css`
      width: 780px;
      height: 600px;
      padding: 20px;
      background: #fff;
    `,
  ];
});

export const TopWrapper = styled.div(() => {
  return [
    tw`
      flex w-full justify-between
    `,
    css`
      margin-bottom: 16px;
      background: #fff;
    `,
  ];
});

export const HomeWrapper = styled.div(() => {
  return [
    tw`
      items-center cursor-pointer
    `,
  ];
});

export const HomeIcon = styled.img(() => {
  return [
    tw`
      cursor-pointer
    `,
    css`
      width: 16px;
      height: 16px;
      z-index: 1;
    `,
  ];
});

export const HomeSpan = styled.span(() => {
  const theme = useTheme();
  return [
    css`
      font-size: ${theme.fontSize.s};
      color: ${theme.color['gray-05']};
      margin-left: 8px;
    `,
  ];
});

export const MiddleWrapper = styled.div(() => {
  const theme = useTheme();
  return [
    tw`
      w-full flex flex-col justify-around
    `,
    css`
      border-radius: 10px;
      height: 222px;
      background-color: ${theme.color['gray-02']};
      padding: 20px;
      margin-bottom: 24px;
    `,
  ];
});

export const MiddleTitleWrapper = styled.div(() => {
  return [
    tw`
      text-left flex flex-col 
    `,
  ];
});

export const SubTitle = styled.span(() => {
  const theme = useTheme();
  return [
    css`
      font-size: ${theme.fontSize.m};
      color: ${theme.color['gray-06']};
      margin-bottom: 2px;
    `,
  ];
});

export const MainTitle = styled.span(() => {
  const theme = useTheme();
  return [
    css`
      font-size: ${theme.fontSize['2xl']};
      font-weight: ${theme.fontWeight.bold};
    `,
  ];
});

export const CategoryDate = styled.span(() => {
  const theme = useTheme();
  return [
    css`
      font-size: ${theme.fontSize.m};
      color: ${theme.color['gray-05']};
    `,
  ];
});

export const BottomWrapper = styled.div(() => {
  return [
    tw`
      overflow-y-auto
    `,
    css`
      max-height: 292px;
      &::-webkit-scrollbar {
        width: 8px;
      }
    `,
  ];
});
