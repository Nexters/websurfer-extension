import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div(() => {
  return [
    tw`
      flex justify-between
      `,
    css`
      margin-bottom: 27px;
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

export const MainImage = styled.img(() => {
  return [
    css`
      width: 425px;
      height: 334px;
    `,
  ];
});

export const TitleContainer = styled.div(() => [
  css`
    padding-top: 106px;
    padding-bottom: 37px;
  `,
]);
