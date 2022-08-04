import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const TitleWrapper = styled.div(() => [
  tw`
    w-full flex justify-between
    `,
]);

export const MainTitle = styled.span(() => {
  const theme = useTheme();

  return [
    css`
      font-weight: ${theme.fontWeight.bold};
      font-size: ${theme.fontSize['xl']};
    `,
  ];
});

export const ContentWrapper = styled.div(() => {
  return [
    tw`
      w-full
    `,
    css`
      margin-top: 12px;
    `,
  ];
});

export const ItemCard = styled.div((props) => {
  const theme = useTheme();

  return [
    css`
      padding: 15px 20px;
      color: ${theme.color['gray-06']};
      background-color: ${theme.color['gray-02']};
      font-weight: ${theme.fontWeight.bold};
      line-height: ${theme.lineHeight.s};
      border-radius: 8px;
      margin: 8px 0;
    `,
  ];
});

export const HistoryListWrapper = styled.div(() => {
  return [
    tw`
      overflow-y-auto
    `,
    css`
      margin: 20px 0;
      height: calc(100vh - 190px);
      &::-webkit-scrollbar {
        width: 4px;
      }
    `,
  ];
});

export const CategoryDate = styled.span(() => {
  const theme = useTheme();
  return [
    tw`
      block
    `,
    css`
      font-size: ${theme.fontSize.l};
      color: ${theme.color['gray-05']};
      font-weight: ${theme.fontWeight.bold};
      margin-bottom: 18px;
    `,
  ];
});

export const ZoomIcon = styled.img(() => [tw`cursor-pointer`]);
