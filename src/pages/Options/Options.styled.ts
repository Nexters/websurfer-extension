import { css } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const Justify = styled.div(() => {
  return [
    tw`
      flex justify-between
      `,
  ];
});
