import { css } from '@emotion/react';
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
    box-border w-full mx-auto py-0
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
    flex flex-wrap 
    `,
  css`
    justify-content: ${props.justify};
  `,
]);

export const Col = styled.div<ColProps>((props) => [
  css`
    width: ${(props.unit ? props.unit : 1) * (GUTTER + UNIT)}px;
    padding: 0 ${GUTTER / 2}px;
    margin: ${props.margin};
  `,
]);
