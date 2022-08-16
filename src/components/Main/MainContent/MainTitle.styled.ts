import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

import * as T from './MainTitle.styled.type';

export const Wrapper = styled.div<T.WrapperProps>((props) => {
  return [
    tw`
      flex justify-between items-end relative 
      `,
    css`
      width: 840px;
      height: 342px;
      overflow: hidden;
      background-image: url('${props.imageUrl}');
      background-size: 840px 350px;
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

export const TitleContainer = styled.div(() => [
  css`
    height: 352px;
    padding-top: 66px;
    padding-bottom: 37px;
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
