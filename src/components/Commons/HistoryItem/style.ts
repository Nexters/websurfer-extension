import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

interface IItemSpan {
  flex?: number;
  maxWidth?: string;
  isSub?: boolean;
}

export const CompactItemWrapper = styled.div(() => {
  return [
    tw`
      flex items-center cursor-pointer
    `,
    css`
      padding: 10px 0;
      margin-bottom: 8px;
      border-radius: 10px;
      &:last-child {
        margin-bottom: unset;
      }
    `,
  ];
});

export const ItemSpan = styled.p(() => {
  const theme = useTheme();
  return [
    tw`
      truncate
    `,
    css`
      font-size: ${theme.fontSize.m};
      color: ${theme.color['gray-06']};
    `,
  ];
});

export const FullItemSpan = styled(ItemSpan)(
  ({ flex, maxWidth, isSub }: IItemSpan) => {
    const theme = useTheme();
    return [
      css`
        ${flex &&
        css`
          flex: ${flex};
        `}
        ${maxWidth &&
        css`
          max-width: ${maxWidth};
        `}
        color:${isSub ? theme.color['gray-04'] : theme.color['gray-06']};
        font-size: ${isSub ? theme.fontSize.s : theme.fontSize.m};
      `,
    ];
  }
);

export const ItemIcon = styled.img(() => {
  return [
    css`
      width: 24px;
      height: 24px;
      margin-right: 20px;
    `,
  ];
});

export const FullItemWrapper = styled(CompactItemWrapper)(() => {
  return [tw`justify-between`];
});

export const FullLeftWrapper = styled.div(() => {
  return [
    tw`
    flex items-center
  `,
    css`
      min-width: 30%;
      max-width: 30%;
    `,
  ];
});

export const VisitCountSpan = styled.div(() => {
  const theme = useTheme();
  return [
    tw`
      flex items-center justify-end relative
    `,
    css`
      & > img {
        margin-right: 2px;
      }
      min-width: 10%;
      font-size: ${theme.fontSize.xs};
      font-weight: ${theme.fontWeight.regular};
      color: ${theme.color['gray-06']};
    `,
  ];
});

export const Tooltip = styled.div(() => {
  const theme = useTheme();
  return [
    tw`
      absolute
    `,
    css`
      padding: 12px 20px;
      border: 1px solid ${theme.color['gray-04']};
      background: #fff;
      font-weight: ${theme.fontWeight.bold};
      font-size: ${theme.fontSize.s};
      border-radius: 10px;
      top: 20px;
      z-index: 1;
      min-width: 90px;
    `,
  ];
});
