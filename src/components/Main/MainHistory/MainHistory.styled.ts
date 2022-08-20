import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

interface IDateCategoryWrapper {
  key?: string;
}

export const Top = styled.div(() => [
  tw`sticky bg-white`,
  css`
    top: 0px;
    padding-top: 55px;
    z-index: 100;
  `,
]);

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
      margin-top: 24px;
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
      font-size: ${theme.fontSize.m};
      color: ${theme.color['gray-08']};
      font-weight: ${theme.fontWeight.bold};
      margin-bottom: 18px;
    `,
  ];
});

export const ZoomIcon = styled.img(() => [tw`cursor-pointer`]);

export const Divider = styled.div(() => {
  const theme = useTheme();
  return [
    tw`w-full`,
    css`
      height: 1px;
      background: ${theme.color['gray-03']};
      margin-top: 28px;
    `,
  ];
});

export const DateCategroyWrapper = styled.div((props: IDateCategoryWrapper) => {
  return [
    css`
      margin-top: 12px;
      &:first-child {
        margin-top: unset;
      }
    `,
  ];
});
