import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

import {
  ItemCardCountProps,
  ItemCardProps,
  ItemCardTitleProps,
} from './MostVisitWebSite.styled.type';

export const ItemCardWrapper = styled.div(() => {
  return [tw`flex flex-wrap`];
});

export const ItemCard = styled.a<ItemCardProps>((props) => {
  const theme = useTheme();
  const { primary } = props;

  return [
    tw`
    flex flex-col justify-between no-underline relative
    `,
    css`
      width: calc((100% - 28px) * (1 / 3));
      height: 140px;
      margin: 0 7px;
      padding: 22px;
      border-radius: 8px;
      background-color: ${primary
        ? theme.color.primary
        : theme.color.secondaryB};
      :first-child {
        margin-left: 0;
      }
      & + :last-child {
        margin-right: 0;
      }
    `,
  ];
});

export const ItemCardTitle = styled.div<ItemCardTitleProps>((props) => {
  const theme = useTheme();
  const { primary } = props;

  return [
    tw`
    overflow-hidden
    `,
    css`
      color: ${primary ? theme.color.white : theme.color['gray-07']};
      ${!props.isMain && 'text-indent: 29px;'}
      font-size: ${theme.fontSize.l};
      line-height: ${theme.lineHeight.xl};
      font-weight: ${theme.fontWeight.bold};
      text-overflow: ellipsis;
    `,
  ];
});

export const ItemCardCount = styled.div<ItemCardCountProps>((props) => {
  const theme = useTheme();
  const { primary } = props;

  return [
    css`
      color: ${primary ? theme.color.white : theme.color['gray-05']};
      font-size: ${theme.fontSize.m};
      line-height: ${theme.lineHeight.l};
      font-weight: ${theme.fontWeight.regular};
    `,
  ];
});
