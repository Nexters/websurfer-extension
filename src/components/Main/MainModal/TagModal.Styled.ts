import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const Description = styled.div(() => {
  const theme = useTheme();
  return [
    // tw``,
    css`
      margin-bottom: 40px;
      color: ${theme.color['gray-06']};
      font-size: ${theme.fontSize.m};
      font-weight: ${theme.fontWeight.regular};
      line-height: ${theme.lineHeight.l};
    `,
  ];
});

export const CardWrapper = styled.div(() => {
  const theme = useTheme();
  return [
    tw`w-full flex flex-wrap`,
    css`
      gap: 20px;
    `,
  ];
});

export const Card = styled.div(() => {
  const theme = useTheme();
  return [
    // tw``,
    css`
      width: 233px;
      height: 270px;
      margin-bottom: 20px;
      padding: 20px 20px 0 20px;
      background-color: ${theme.color.white};
      border-radius: 24px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    `,
  ];
});

export const CardTitle = styled.div(() => {
  const theme = useTheme();
  return [
    tw`text-center truncate`,
    css`
      padding: 8px 23px;
      margin-bottom: 14px;
      color: ${theme.color.white};
      font-weight: ${theme.fontWeight.bold};
      font-size: 18px;
      line-height: ${theme.lineHeight['2xl']};
      background-color: ${theme.color.pink};
      border-radius: 50px;
    `,
  ];
});

export const CardDescription = styled.div(() => {
  const theme = useTheme();
  return [
    tw`text-center truncate`,
    css`
      margin-bottom: 24px;
      color: ${theme.color['gray-06']};
      font-size: ${theme.fontSize.s};
      font-weight: ${theme.fontWeight.regular};
      line-height: ${theme.lineHeight.m};
    `,
  ];
});

export const CardImage = styled.img(() => {
  const theme = useTheme();
  return [tw`w-full`];
});
