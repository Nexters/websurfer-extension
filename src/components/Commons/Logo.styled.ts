import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const Logo = styled.div(() => {
  const theme = useTheme();

  return [
    tw`
    items-center
      `,
    css`
      width: 220px;
      height: 44px;
      margin: 0 0;
      padding-left: 13px;
      font-size: ${theme.fontSize.xl};
      color: ${theme.color.white};
      line-height: ${theme.lineHeight['3xl']};
      background-color: ${theme.color['gray-06']};
    `,
  ];
});
