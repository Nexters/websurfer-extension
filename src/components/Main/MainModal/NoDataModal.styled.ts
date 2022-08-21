import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div(() => {
  return [
    css`
      max-width: 1320px;
      min-width: 1320px;
      height: calc(100vh - 20px);
      margin: 0 auto;
      margin-top: 20px;
    `,
  ];
});

export const NoDataImg = styled.img(() => []);

export const ContetnWrapper = styled.div(() => {
  return [
    tw`
      flex flex-col justify-center items-center w-full
    `,
  ];
});

export const ContentItem = styled.div(() => {
  return [
    tw`
    flex flex-col relative 
  `,
    css`
      bottom: 20px;
    `,
  ];
});

export const MainTitle = styled.span(() => {
  const theme = useTheme();

  return [
    tw`
      text-center
    `,
    css`
      font-size: ${theme.fontSize['3xl']};
      font-weight: ${theme.fontWeight['bold']};
      color: ${theme.color['gray-08']};
      margin-top: 50px;
      margin-bottom: 24px;
    `,
  ];
});

export const SubTitle = styled.span(() => {
  const theme = useTheme();
  return [
    tw`
    text-center
    `,
    css`
      font-size: ${theme.fontSize['m']};
      color: ${theme.color['gray-06']};
    `,
  ];
});

export const GoSurfButton = styled.button(() => {
  const theme = useTheme();
  return [
    tw`
      self-center cursor-pointer
    `,
    css`
      padding: 8px 32px;
      border-radius: 50px;
      font-weight: ${theme.fontWeight['bold']};
      background-color: ${theme.color.primary};
      color: #fff;
      border: none;
      width: max-content;
      margin-top: 40px;
    `,
  ];
});

export const SettingDropdownWrapper = styled.div(() => {
  return [
    tw`
      relative
    `,
    css`
      top: 0px;
    `,
  ];
});

export const TopWrapper = styled.div(() => {
  return [
    tw`
      absolute
    `,
    css`
      max-width: 1320px;
      min-width: 1320px;
    `,
  ];
});
