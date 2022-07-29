import { css, useTheme } from '@emotion/react';
import { MAX_WIDTH } from '../../components/Grid/Grid.styled';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div(() => {
  return [
    tw`
      flex-col
    `,
    css`
      width: 780px;
      height: 600px;
    `,
  ];
});
