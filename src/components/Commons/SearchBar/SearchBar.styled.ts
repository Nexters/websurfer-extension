import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

interface InputProps {
  hasFilter: boolean;
  isInputActive?: boolean;
}

interface IFilterProps {
  isInputActive?: boolean;
}

export const Wrapper = styled.div(() => {
  return [
    tw`
      flex items-center relative
    `,
  ];
});

export const Input = styled.input<InputProps>(({ hasFilter, isActive }) => {
  const theme = useTheme();
  return [
    tw`
      w-full
    `,
    css`
      font-size: ${theme.fontSize.m};
      border-radius: ${hasFilter ? '10px 0 0 10px' : '10px'};
      border: 1px solid ${isActive ? 'blue' : theme.color['gray-03']};
      padding: 17px 17px 17px 55px;
      outline: none;
      height: 50px;
    `,
  ];
});

export const Filter = styled.img<IFilterProps>(({ isInputActive }) => {
  const theme = useTheme();
  return [
    tw`
      cursor-pointer
    `,
    css`
      border: 1px solid ${isInputActive ? 'blue' : theme.color['gray-03']};
      border-left: 0px;
      border-radius: 0px 10px 10px 0;
      padding: 14px;
      background: #fff;
      outline: none;
      height: 50px;
    `,
  ];
});

export const SearchIcon = styled.img(() => {
  return [
    tw`absolute`,
    css`
      left: 20px;
    `,
  ];
});

export const FilterWrapper = styled.div(() => {
  return [
    tw`
      absolute
    `,
    css`
      top: 50px;
      right: 0;
    `,
  ];
});
