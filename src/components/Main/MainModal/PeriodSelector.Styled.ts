import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const Container = styled.div(() => {
  const theme = useTheme();
  return [
    tw`absolute bg-white z-30`,
    css`
      padding: 24px 20px;
      top: 200px;
      width: 374px;
      border: 1px solid ${theme.color.primary};
      border-radius: 10px;
    `,
  ];
});

export const TitleWrapper = styled.div(() => {
  const theme = useTheme();
  return [
    tw`w-full flex justify-between items-center`,
    css`
      height: 30px;
      margin-bottom: 16px;
    `,
  ];
});

export const Message = styled.div(() => {
  const theme = useTheme();
  return [
    // tw``,
    css`
      color: ${theme.color['gray-08']};
      font-weight: ${theme.fontWeight.bold};
      font-size: ${theme.fontSize.l};
      line-height: ${theme.lineHeight.xl};
    `,
  ];
});

export const ResetIcon = styled.img(() => {
  const theme = useTheme();
  return [
    // tw``,
    css`
      width: 18px;
      height: 18px;
    `,
  ];
});
