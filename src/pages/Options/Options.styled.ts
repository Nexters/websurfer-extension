import { css, useTheme } from '@emotion/react';
import { MAX_WIDTH } from '../../components/Grid/Grid.styled';
import tw, { styled } from 'twin.macro';

export const Justify = styled.div(() => {
  return [
    tw`
      flex justify-between
      `,
  ];
});

export const backgroundContainer = styled.div(() => [
  tw`flex z-0 w-full min-h-screen p-0 m-0 top-0 left-0 fixed`,
]);
export const backgroundItem = styled.div(() => {
  const theme = useTheme();
  return [
    tw`
    w-1/2
    `,
    css`
      :first-child {
        background-color: ${window.innerWidth < MAX_WIDTH
          ? theme.color.white
          : theme.color['gray-02']};
      }
      :last-child {
        background-color: ${theme.color.white};
      }
    `,
  ];
});

export const LandingMainImage = styled.img(() => {
  return [
    css`
      width: 312px;
      height: 385px;
    `,
  ];
});

export const LandingTitle = styled.div(() => {
  const theme = useTheme();
  return [
    css`
      margin-top: 44px;
      color: ${theme.color['gray-08']};
      font-size: ${theme.fontSize['4xl']};
      line-height: ${theme.lineHeight['5xl']};
      font-weight: 800; //theme에 정의 X
    `,
  ];
});

export const LandingSubTitle = styled.div(() => {
  const theme = useTheme();
  return [
    css`
      margin-top: 12px;
      color: ${theme.color['gray-05']};
      font-size: ${theme.fontSize.l};
      line-height: ${theme.lineHeight.m};
    `,
  ];
});

export const GoogleLoginButton = styled.button(() => {
  const theme = useTheme();
  return [
    css`
      margin-top: 40px;
      width: 217px;
      height: 45px;
      background-color: ${theme.color['gray-04']};
      border: 1px solid;
      border-radius: 22.5px;
    `,
  ];
});
