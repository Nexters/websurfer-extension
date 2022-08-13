import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const ModalContainer = styled.div(() => [
  tw`fixed w-screen h-screen z-20`,
  css`
    background-color: rgba(0, 0, 0, 0.7);
    /* min-height: 1000px; */
  `,
]);

export const ModalWrapper = styled.div(() => {
  const theme = useTheme();

  return [
    tw`absolute left-1/2 top-1/2 z-20`,
    css`
      width: 820px;
      height: 854px;
      transform: translate(-50%, -50%);
    `,
  ];
});

export const ModalTitleWrapper = styled.div(() => {
  const theme = useTheme();

  return [
    tw`flex w-full items-center justify-between`,
    css`
      height: 54px;
    `,
  ];
});

export const ModalContentWrapper = styled.div(() => {
  const theme = useTheme();

  return [
    tw`w-full bg-white`,
    css`
      height: 800px;
      border-radius: 18px;
      padding: 30px 40px;
    `,
  ];
});

export const ModalTitle = styled.div(() => {
  const theme = useTheme();

  return [
    tw`text-left`,
    css`
      color: ${theme.color.white};
      font-size: ${theme.fontSize.xl};
      font-weight: ${theme.fontWeight.bold};
      line-height: ${theme.lineHeight['2xl']};
    `,
  ];
});

export const ModalCloseButton = styled.img(() => [
  css`
    width: 38px;
    height: 38px;
    &:hover {
      cursor: pointer;
    }
  `,
]);
