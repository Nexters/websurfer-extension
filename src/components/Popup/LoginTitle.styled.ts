import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const DummyTitleWrapper = styled.div(() => {
  return [
    tw`
      flex justify-between items-end relative
      `,
    css`
      width: '100%';
      height: 342px;
      overflow: hidden;
    `,
  ];
});

export const TitleContainer = styled.div(() => [tw`absolute`]);

export const TitleWrapper = styled.div(() => {
  return [
    css`
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      justify-content: start;
    `,
  ];
});

export const Description = styled.div(() => {
  const theme = useTheme();
  return [
    css`
      color: ${theme.color['gray-06']};
      font-size: ${theme.fontSize.m};
      font-weight: ${theme.fontWeight.regular};
      line-height: ${theme.lineHeight.l};
    `,
  ];
});

export const GoogleLogin = styled.div(() => {
  const theme = useTheme();
  return [
    tw`
      cursor-pointer
    `,
    css`
      width: max-content;
      border-radius: 20px;
      padding: 10px 20px;
      margin-top: 50px;
      border: 1px solid ${theme.color['gray-03']};
      color: ${theme.color['gray-06']};
      font-weight: ${theme.fontWeight.bold};
    `,
  ];
});

export const MainImage = styled.img((props) => {
  return [
    css`
      height: 180px;
      position: absolute;
      right: 0;
    `,
  ];
});

export const Title = styled.div(() => {
  const theme = useTheme();
  return [
    css`
      font-size: ${theme.fontSize['2xl']};
      color: ${theme.color['gray-08']};
      line-height: 67.2px; //theme에 정의 X
      font-weight: 800; //theme에 정의 X
    `,
  ];
});
