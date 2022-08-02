import { css, useTheme } from '@emotion/react';
import { MAX_WIDTH } from '../../components/Grid/Grid.styled';
import tw, { styled } from 'twin.macro';

export const Justify = styled.div(() => {
  return [
    tw`
      flex justify-between
      `,
  ];
});

export const backgroundContainer = styled.div(() => [
  tw`flex z-0 w-full min-h-screen p-0 m-0 top-0 left-0 fixed`,
]);
export const backgroundItem = styled.div(() => {
  const theme = useTheme();
  return [
    tw`
    w-1/2
    `,
    css`
      :first-child {
        background-color: ${window.innerWidth < MAX_WIDTH
          ? theme.color.white
          : theme.color.bgColor};
      }
      :last-child {
        background-color: ${theme.color.white};
      }
    `,
  ];
});
