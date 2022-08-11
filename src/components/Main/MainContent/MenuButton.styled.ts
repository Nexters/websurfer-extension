import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const MenuButtonsWrapper = styled.div(() => [
  tw`
      flex justify-between w-full
      `,
  css`
    width: 70px;
  `,
]);

export const Icon = styled.img(() => {
  const theme = useTheme();
  return [
    tw`cursor-pointer`,
    css`
      width: 24px;
      height: 24px;
    `,
  ];
});
