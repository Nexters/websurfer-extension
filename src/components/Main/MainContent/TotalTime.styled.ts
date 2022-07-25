import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const Time = styled.div(() => {
  const theme = useTheme();

  return [
    tw`
    inline-block
    `,
    css`
      color: ${theme.color['gray-08']};
      font-size: ${theme.fontSize['6xl']};
      font-weight: ${theme.fontWeight.bold};
      line-height: ${theme.lineHeight['5xl']};
    `,
  ];
});

export const Minute = styled.div(() => {
  const theme = useTheme();

  return [
    tw`
      inline-block
      `,
    css`
      color: ${theme.color['gray-07']};
      margin-left: 5px;
      font-size: ${theme.fontSize.l};
      font-weight: ${theme.fontWeight.bold};
      line-height: ${theme.lineHeight.xl};
    `,
  ];
});
