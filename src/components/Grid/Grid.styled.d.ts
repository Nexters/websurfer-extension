export type AlignSimpletype = 'stretch' | 'start' | 'center' | 'end';
export type AlignType =
  | AlignSimpletype
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface RowProps {
  justify?: AlignType;
}
export interface ColProps {
  unit?: number;
}
