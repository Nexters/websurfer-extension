import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const Logo = styled.div(() => {
  const theme = useTheme();

  return [
    tw`
    items-center
      `,
    css`
      width: 100px;
      height: 42px;
      margin: 0 0;
      font-size: ${theme.fontSize.m};
      color: ${theme.color['gray-08']};
      font-weight: ${theme.fontWeight.bold};
      line-height: ${theme.lineHeight['3xl']};
    `,
  ];
});
