import { css, useTheme } from '@emotion/react';
import { MAX_WIDTH } from '../../components/Grid/Grid.styled';
import tw, { styled } from 'twin.macro';

interface IWrapper {
  loggedIn?: boolean;
}

export const Wrapper = styled.div(({ loggedIn }: IWrapper) => {
  return [
    tw`
      flex-col overflow-hidden
    `,
    css`
      width: 780px;
      height: ${loggedIn ? '600px' : 'unset'};
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

interface IMiddleWrapper {
  loggedIn?: boolean;
}

export const MiddleWrapper = styled.div(({ loggedIn }: IMiddleWrapper) => {
  const theme = useTheme();
  return [
    tw`
      w-full flex flex-col justify-around
    `,
    css`
      border-radius: 10px;
      height: 222px;
      background-color: ${loggedIn ? theme.color['gray-02'] : '#fff'};
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
      color: ${theme.color['gray-08']};
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
      color: ${theme.color.primary};
    `,
  ];
});

export const CategoryDate = styled.span(() => {
  const theme = useTheme();
  return [
    css`
      font-size: ${theme.fontSize.m};
      color: ${theme.color['gray-05']};
      font-weight: ${theme.fontWeight.bold};
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
