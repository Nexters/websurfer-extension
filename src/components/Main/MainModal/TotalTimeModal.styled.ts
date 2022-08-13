import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

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
