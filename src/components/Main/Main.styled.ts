import { css, useTheme } from '@emotion/react';
import { MAX_WIDTH } from '../Grid/Grid.styled';
import tw, { styled } from 'twin.macro';

export const Justify = styled.div(() => {
  return [
    tw`flex justify-between`,
    css`
      margin-bottom: 20px;
    `,
  ];
});

export const BackgroundContainer = styled.div(() => [
  tw`flex z-0 w-full min-h-screen p-0 m-0 top-0 left-0 fixed`,
]);

export const BackgroundItem = styled.div(() => {
  const theme = useTheme();
  return [
    tw`w-1/2`,
    css`
      :first-child {
        background-color: ${theme.color.bgColor};
      }
      :last-child {
        background-color: ${theme.color.white};
      }
    `,
  ];
});

export const UpdateWrapper = styled.div(() => {
  const theme = useTheme();
  return [
    tw`flex items-center`,
    css`
      font-size: ${theme.fontSize.s};
      font-weight: ${theme.fontWeight.regular};
      line-height: ${theme.lineHeight.m};
      color: ${theme.color['gray-04']};
    `,
  ];
});

export const UpdateMessage = styled.div(() => {
  const theme = useTheme();
  return [
    tw`inline-block`,
    css`
      font-size: ${theme.fontSize.s};
      font-weight: ${theme.fontWeight.regular};
      line-height: ${theme.lineHeight.m};
      color: ${theme.color['gray-04']};
      margin-right: 4px;
    `,
  ];
});

export const UpdateIcon = styled.img(() => {
  const theme = useTheme();
  return [
    tw`inline-block cursor-pointer`,
    css`
      font-size: ${theme.fontSize.s};
      color: ${theme.color['gray-04']};
    `,
  ];
});

export const Sticky = styled.div(() => [
  tw`sticky`,
  css`
    top: 55px;
  `,
]);

export const MainContentsContainer = styled.div(() => {
  return [
    tw`w-full overflow-y-auto relative`,
    css`
      height: calc(100vh - 120px);
      top: 0;
      &::-webkit-scrollbar {
        width: 4px;
      }
    `,
  ];
});

export const MainContentsWrapper = styled.div(() => {
  return [
    tw`w-full overflow-y-auto overflow-x-hidden absolute`,
    css`
      top: 0;
      padding-bottom: 60px;
      &::-webkit-scrollbar {
        width: 8px;
      }
    `,
  ];
});
