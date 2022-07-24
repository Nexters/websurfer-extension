import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const TitleWrapper = styled.div(() => [
  tw`
    w-full flex justify-between
    `,
]);

export const WFull = styled.div(() => [
  tw`
    w-full
    `,
]);

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
