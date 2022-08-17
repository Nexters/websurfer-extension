import { css, useTheme } from '@emotion/react';
import { useState } from 'react';
import tw, { styled } from 'twin.macro';

export const ModalContainer = styled.div(() => [
  tw`fixed w-screen h-screen z-20`,
  css`
    background-color: rgba(0, 0, 0, 0.7);
  `,
]);

export const ModalWrapper = styled.div(() => {
  const theme = useTheme();
  const [innerWith, setInnerWidth] = useState<number>(window.innerWidth);

  const printInnerWidth = () => {
    setInnerWidth(window.innerWidth);
  };

  window.addEventListener('resize', printInnerWidth);

  return [
    tw`absolute z-20`,
    css`
      width: 820px;
      top: 115px;
      left: ${innerWidth < 820 ? '10px' : '50%'};
      min-width: 820px;
      transform: ${innerWidth < 820 ? '' : 'translate(-50%)'};
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

export const ModalContentContainer = styled.div(() => {
  const theme = useTheme();

  return [
    tw`w-full bg-white`,
    css`
      border-radius: 18px;
      padding: 30px 0;
      max-height: 800px;
    `,
  ];
});

export const ModalContentWrapper = styled.div(() => {
  const theme = useTheme();

  return [
    tw`w-full bg-white overflow-y-auto overflow-x-hidden`,
    css`
      max-height: 740px;
      padding: 0 40px;
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
