import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

export const PeriodTitle = styled.div(() => {
  const theme = useTheme();
  return [
    // tw``,
    css`
      margin-bottom: 8px;
      color: ${theme.color['gray-07']};
      font-size: ${theme.fontSize.m};
      font-weight: ${theme.fontWeight.regular};
      line-height: ${theme.lineHeight.l};
    `,
  ];
});

export const Title = styled.div(() => {
  const theme = useTheme();
  return [
    // tw``,
    css`
      margin-bottom: 30px;
      color: ${theme.color['gray-08']};
      font-size: ${theme.fontSize['2xl']};
      font-weight: ${theme.fontWeight.bold};
      line-height: ${theme.lineHeight['3xl']};
    `,
  ];
});

export const SiteListContainer = styled.div(() => {
  const theme = useTheme();
  return [
    tw`flex w-full items-center justify-between`,
    css`
      height: 56px;
      border-style: solid;
      border-width: 1px 0 0 0;
      border-color: ${theme.color['gray-03']};
    `,
  ];
});

export const SiteInformationWrapper = styled.div(() => {
  const theme = useTheme();
  return [
    tw`flex justify-start`,
    css`
      width: 636px;
      height: 24px;
    `,
  ];
});

export const SiteListNumber = styled.div(() => {
  const theme = useTheme();
  return [
    //   tw``,
    css`
      width: 18px;
      margin-right: 22px;
      color: ${theme.color['gray-06']};
      font-size: ${theme.fontSize.m};
      font-weight: ${theme.fontWeight.bold};
      line-height: ${theme.lineHeight.m};
    `,
  ];
});

export const SiteListIcon = styled.img(() => {
  const theme = useTheme();
  return [
    //   tw``,
    css`
      width: 24px;
      height: 24px;
      margin-right: 22px;
      border-radius: 6px;
      background-color: ${theme.color['gray-06']};
    `,
  ];
});

export const SiteListTitle = styled.div(() => {
  const theme = useTheme();
  return [
    tw`overflow-hidden`,
    css`
      width: 553px;
      margin-right: 19px;
      color: ${theme.color['gray-06']};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize.m};
      line-height: ${theme.lineHeight.l};
      text-overflow: ellipsis;
      white-space: nowrap;
    `,
  ];
});

export const SiteListCount = styled.div(() => {
  const theme = useTheme();
  return [
    tw`text-right`,
    css`
      width: 82px;
      color: ${theme.color['gray-06']};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize.s};
      line-height: ${theme.lineHeight.xs};
    `,
  ];
});
