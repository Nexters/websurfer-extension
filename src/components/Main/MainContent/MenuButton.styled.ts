import { css } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const MenuButtonsWrapper = styled.div(() => [
  tw`
      flex justify-between w-full
      `,
]);

export const Icon = styled.img(() => [
  css`
    width: 24px;
    height: 24px;
  `,
]);
