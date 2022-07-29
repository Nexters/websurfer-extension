import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

interface IItemSpan {
  flex?: number;
  maxWidth?: string;
}

export const CompactItemWrapper = styled.div(() => {
  const theme = useTheme();
  return [
    tw`
      flex items-center
    `,
    css`
      padding: 18px 20px;
      margin-bottom: 8px;
      background-color: ${theme.color['gray-02']};
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
      font-size: ${theme.fontSize.l};
      font-weight: ${theme.fontWeight.bold};
      color: ${theme.color['gray-06']};
    `,
  ];
});

export const FullItemSpan = styled(ItemSpan)(
  ({ flex, maxWidth }: IItemSpan) => {
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
      flex items-center justify-end
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
