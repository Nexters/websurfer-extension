import { css } from '@emotion/react';
import tw, { styled } from 'twin.macro';

import { ColProps, RowProps } from './Grid.styled.d';

//grid
const COLUMN = 12;
const MARGIN = 15;
const GUTTER = 30;
const UNIT = 80;
const MAX_WIDTH = 1320;

export const Container = styled.div(() => [
  tw`
    box-border w-full my-0 mx-auto py-0
    `,
  css`
    max-width: ${MAX_WIDTH}px;
    min-width: ${MAX_WIDTH}px;
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
  `,
]);
