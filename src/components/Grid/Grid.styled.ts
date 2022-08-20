import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

import { ColProps, ContainerProps, RowProps } from './Grid.styled.type';

//grid
export const COLUMN = 12;
export const MARGIN = 20;
export const GUTTER = 40;
export const UNIT = 70;
export const MAX_WIDTH = 1320;

export const Container = styled.div<ContainerProps>((props) => [
  tw`
    w-full mx-auto py-0 z-10 top-0 left-0 flex justify-center absolute
    `,
  css`
    margin-top: ${props.marginY};
    margin-bottom: ${props.marginY};
    min-width: ${MAX_WIDTH}px;
  `,
]);

export const Row = styled.div<RowProps>((props) => [
  tw`
    flex flex-wrap min-h-screen h-full
    `,
  css`
    justify-content: ${props.justify};
    max-width: ${MAX_WIDTH}px;
    min-width: ${MAX_WIDTH}px;
  `,
]);

export const Col = styled.div<ColProps>((props) => {
  const theme = useTheme();

  const selectBackgroundColor = (): string => {
    switch (props.backgroundColor) {
      case 'white':
        return theme.color.white;
      case 'bgColor':
        return theme.color.bgColor;
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

export const LayoutCol = styled(Col)<ColProps>((props) => {
  return [
    css`
      display: ${props.display};
      :first-child {
        width: ${(props.unit ? props.unit : 1) * (GUTTER + UNIT) +
        GUTTER / 2}px;
        padding-right: ${GUTTER}px;
      }
      & + & {
        padding-left: 0;
      }
      :last-child {
        width: ${(props.unit ? props.unit : 1) * (GUTTER + UNIT) -
        GUTTER / 2}px;
        padding: 20px 30px 20px;
      }
    `,
  ];
});
