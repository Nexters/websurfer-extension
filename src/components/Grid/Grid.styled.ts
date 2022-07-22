import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

import { ColProps, ContainerProps, RowProps } from './Grid.styled.type';

//grid
const COLUMN = 12;
const MARGIN = 15;
const GUTTER = 30;
const UNIT = 80;
const MAX_WIDTH = 1320;

export const Container = styled.div<ContainerProps>((props) => [
  tw`
    box-border w-full mx-auto py-0 min-h-full
    `,
  css`
    max-width: ${MAX_WIDTH}px;
    min-width: ${MAX_WIDTH}px;
    margin-top: ${props.marginY};
    margin-bottom: ${props.marginY};
  `,
]);

export const Row = styled.div<RowProps>((props) => [
  tw`
    flex flex-wrap min-h-screen
    `,
  css`
    justify-content: ${props.justify};
  `,
]);

export const Col = styled.div<ColProps>((props) => {
  const theme = useTheme();

  const selectBackgroundColor = (): string => {
    switch (props.backgroundColor) {
      case 'white':
        return theme.color.white;
      case 'gray-02':
        return theme.color['gray-02'];
      default:
        return props.backgroundColor ? props.backgroundColor : '';
    }
  };
  return [
    css`
      width: ${(props.unit ? props.unit : 1) * (GUTTER + UNIT)}px;
      padding: ${props.paddingTop} ${GUTTER / 2}px ${props.paddingBottom}
        ${GUTTER / 2}px;
      margin: ${props.margin};
      background-color: ${selectBackgroundColor()};
    `,
  ];
});
