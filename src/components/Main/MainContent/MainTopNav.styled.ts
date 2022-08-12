import { css } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div(() => {
  return [
    tw`
      flex justify-between items-center relative
      `,
    css`
      height: 42px;
      margin-bottom: 9px;
    `,
  ];
});

export const topButtonWrapper = styled.div(() => {
  return [
    css`
      width: 70px;
      height: 42px;
    `,
  ];
});
