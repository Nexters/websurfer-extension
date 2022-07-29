export type AlignSimpletype = 'stretch' | 'start' | 'center' | 'end';
export type AlignType =
  | AlignSimpletype
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface ContainerProps {
  marginY?: string;
}

export interface RowProps {
  minHeightScreen?: boolean;
  justify?: AlignType;
}
export interface ColProps {
  unit?: number;
  paddingTop?: string;
  paddingBottom?: string;
  margin?: string;
  backgroundColor?: string;
  display?: string;
  overflowHidden?: boolean;
  height?: string;
  padding?: string;
}
