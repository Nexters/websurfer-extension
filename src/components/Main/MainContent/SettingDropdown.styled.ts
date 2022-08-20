import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';
import { SettingDropdownItemProps } from './SettingDropdown.styled.type';

export const Wrapper = styled.div<SettingDropdownItemProps>((props) => {
  const theme = useTheme();
  return [
    tw`absolute text-center top-0`,
    css`
      visibility: ${props.isActive ? 'visible' : 'hidden'};
      padding: 12px 20px;
      background-color: ${theme.color.white};
      border-width: 1px;
      border-style: solid;
      border-color: ${theme.color['gray-04']};
      border-radius: 10px;
      filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
      right: 8px;
    `,
  ];
});

export const Item = styled.div(() => {
  const theme = useTheme();
  return [
    tw`
      cursor-pointer
    `,
    css`
      font-size: ${theme.fontSize.s};
      font-weight: ${theme.fontWeight.bold};
      line-height: ${theme.lineHeight.s};
      color: ${theme.color['gray-07']};
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
    `,
  ];
});
