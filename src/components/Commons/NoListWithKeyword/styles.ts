import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div(() => {
  return [
    tw`
      w-full h-full flex items-center justify-center
    `,
  ];
});

export const ContentWrapper = styled.div(() => {
  return [
    tw`
      flex flex-col items-center justify-center
    `,
  ];
});

export const Img = styled.img(() => {
  return [
    css`
      margin-bottom: 16px;
    `,
  ];
});

export const Description = styled.span(() => {
  const theme = useTheme();
  return [
    tw`
    text-center
    `,
    css`
      color: ${theme.color['gray-04']};
      font-size: ${theme.fontSize.m};
    `,
  ];
});
