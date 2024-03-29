import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

interface IWrapper {
  showBottom?: boolean;
}

export const Wrapper = styled.div(({ showBottom }: IWrapper) => {
  return [
    tw`
      flex-col overflow-hidden
    `,
    css`
      width: 780px;
      height: ${showBottom ? '600px' : 'unset'};
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
    `,
  ];
});

export const HomeWrapper = styled.div(() => {
  return [
    tw`
      flex items-center cursor-pointer
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

interface IMiddleWrapper {
  bgWhite?: boolean;
}

export const MiddleWrapper = styled.div(({ bgWhite }: IMiddleWrapper) => {
  const theme = useTheme();
  return [
    tw`
      w-full flex flex-col
    `,
    css`
      border-radius: 10px;
      background-color: ${bgWhite ? '#fff' : theme.color.bgColor};
      padding: 20px;
      margin-bottom: ${bgWhite ? 'unset' : '24px'};
      height: ${bgWhite ? '227px' : 'auto'};
    `,
  ];
});

export const MiddleTitleWrapper = styled.div(() => {
  return [
    tw`
      text-left flex flex-col relative
    `,
    css`
      bottom: 10px;
    `,
  ];
});

export const SubTitle = styled.span(() => {
  const theme = useTheme();
  return [
    css`
      font-size: ${theme.fontSize.m};
      color: ${theme.color['gray-08']};
      margin-bottom: 8px;
    `,
  ];
});

export const MainTitle = styled.span(() => {
  const theme = useTheme();
  return [
    css`
      font-size: ${theme.fontSize['2xl']};
      font-weight: ${theme.fontWeight.bold};
      color: ${theme.color.primary};
      margin-bottom: 8px;
    `,
  ];
});

export const CategoryDate = styled.span(() => {
  const theme = useTheme();
  return [
    tw`block`,
    css`
      font-size: ${theme.fontSize.m};
      color: ${theme.color['gray-08']};
      font-weight: ${theme.fontWeight.bold};
      margin-bottom: 20px;
    `,
  ];
});

export const BottomWrapper = styled.div(() => {
  return [
    tw`
      overflow-y-auto h-full
    `,
    css`
      max-height: 292px;
      &::-webkit-scrollbar {
        width: 8px;
      }
    `,
  ];
});

export const Divider = styled.div(() => {
  const theme = useTheme();
  return [
    tw`w-full`,
    css`
      height: 1px;
      background: ${theme.color['gray-03']};
      margin-top: 28px;
    `,
  ];
});

export const DateCategroyWrapper = styled.div(() => {
  return [
    css`
      margin-top: 12px;
      &:first-child {
        margin-top: unset;
      }
    `,
  ];
});

export const NoListWrapper = styled.div(() => {
  return [
    css`
      height: 270px;
    `,
  ];
});

export const MiddleTopWrapper = styled.div(() => {
  return [tw`flex justify-between items-center`];
});

export const MainImage = styled.img(() => {
  return [
    css`
      height: 115px;
    `,
  ];
});

export const SubDescription = styled.span(() => {
  const theme = useTheme();
  return [
    css`
      color: ${theme.color['gray-06']};
      font-size: ${theme.fontSize.s};
    `,
  ];
});
