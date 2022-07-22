import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

import { ItemCardProps } from './MostVisitWebSite.styled.type';

export const ItemCardWrapper = styled.div(() => {
  return [
    tw`
            flex flex-wrap 
        `,
  ];
});

export const ItemCard = styled.div<ItemCardProps>((props) => {
  const theme = useTheme();

  const selectBackgroundColor = (): string => {
    switch (props.backgroundColor) {
      case 'white':
        return theme.color.white;
      case 'gray-02':
        return theme.color['gray-02'];
      case 'gray-05':
        return theme.color['gray-05'];
      default:
        return props.backgroundColor
          ? props.backgroundColor
          : theme.color.white;
    }
  };

  return [
    css`
      width: calc((100% - 28px) * (1 / 3));
      height: 140px;
      margin: 0 7px;
      padding: 22px;
      border-radius: 8px;
      background-color: ${selectBackgroundColor()};
      :first-child {
        margin-left: 0;
      }
      & + :last-child {
        margin-right: 0;
      }
    `,
  ];
});
