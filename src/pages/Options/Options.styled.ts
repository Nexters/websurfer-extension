import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const Justify = styled.div(() => {
  return [
    tw`
      flex justify-between
      `,
  ];
});

export const backgroundContainer = styled.div(() => [
  tw`flex z-0 w-full min-h-screen p-0 m-0 top-0 left-0`,
]);
export const backgroundItem = styled.div(() => {
  const theme = useTheme();
  return [
    tw`
    w-1/2
    `,
    css`
      :first-child {
        background-color: ${theme.color['gray-02']};
      }
      :last-child {
        background-color: ${theme.color.white};
      }
    `,
  ];
});
