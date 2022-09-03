import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

import * as T from './Tab.Styled.Type';

export const TabWrapper = styled.div(() => {
  const theme = useTheme();
  return [
    tw`w-full flex justify-between`,
    css`
      margin-bottom: 40px;
      padding-top: 30px;
      height: 36px;
      position: sticky;
      top: 0px;
      background-color: ${theme.color.white};
      z-index: 6;
    `,
  ];
});

export const TabItemWrapper = styled.div<T.TabItemWrapperProps>(
  ({ isActive, disabled }) => {
    const theme = useTheme();
    return [
      tw`w-full flex justify-center`,
      css`
        height: 36px;
        color: ${isActive
          ? theme.color.primary
          : disabled
          ? theme.color['gray-04']
          : theme.color['gray-06']};
        font-size: ${theme.fontSize.m};
        font-weight: ${isActive
          ? theme.fontWeight.bold
          : theme.fontWeight.regular};
        line-height: ${theme.lineHeight.l};
        border-style: solid;
        border-width: 0 0 2px 0;
        border-color: ${isActive
          ? theme.color.primary
          : disabled
          ? theme.color['gray-04']
          : theme.color['gray-06']};
        background-color: ${theme.color.white};
        &:hover {
          color: ${!disabled ? theme.color.primary : ''};
          border-color: ${!disabled ? theme.color.primary : ''};
          cursor: ${!disabled ? 'pointer' : 'not-allowed'};
        }
      `,
    ];
  }
);
