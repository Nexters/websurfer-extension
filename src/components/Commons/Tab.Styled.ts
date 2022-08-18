import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

import * as T from './Tab.Styled.Type';

export const TabWrapper = styled.div(() => {
  const theme = useTheme();
  return [
    tw`w-full flex justify-between`,
    css`
      height: 36px;
      margin-bottom: 40px;
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
        color: ${isActive ? theme.color.primary : theme.color['gray-06']};
        font-size: ${theme.fontSize.m};
        font-weight: ${isActive
          ? theme.fontWeight.bold
          : theme.fontWeight.regular};
        line-height: ${theme.lineHeight.l};
        border-style: solid;
        border-width: 0 0 2px 0;
        border-color: ${isActive
          ? theme.color.primary
          : theme.color['gray-03']};
        &:hover {
          color: ${!disabled ? theme.color.primary : ''};
          border-color: ${!disabled ? theme.color.primary : ''};
          cursor: ${!disabled ? 'pointer' : 'not-allowed'};
        }
      `,
    ];
  }
);
