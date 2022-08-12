import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';

interface InputProps {
  hasFilter: boolean;
  isInputActive?: boolean;
}

interface IFilterProps {
  isInputActive?: boolean;
}

interface IButtonProps {
  disabled: boolean;
}

export const Wrapper = styled.div(() => {
  return [
    tw`
      flex items-center relative
    `,
  ];
});

export const Input = styled.input<InputProps>(
  ({ hasFilter, isInputActive }) => {
    const theme = useTheme();
    return [
      tw`
      w-full
    `,
      css`
        font-size: ${theme.fontSize.m};
        border-radius: ${hasFilter ? '10px 0 0 10px' : '10px'};
        border: 1px solid ${isInputActive ? 'blue' : theme.color['gray-03']};
        padding: 17px 17px 17px 55px;
        outline: none;
        height: 50px;
      `,
    ];
  }
);

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

export const FilterTitle = styled.span(() => {
  const theme = useTheme();
  return [
    css`
      font-size: ${theme.fontSize.l};
      font-weight: ${theme.fontWeight.bold};
    `,
  ];
});

export const FilterWrapper = styled.div(() => {
  const theme = useTheme();
  return [
    tw`
      absolute flex-col
    `,
    css`
      top: 60px;
      right: 0;
      padding: 20px;
      border: 1px solid ${theme.color.primary};
      border-radius: 10px;
      filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
      background: #fff;
    `,
  ];
});

export const RefreshButton = styled.img(() => {
  return [
    tw`
      cursor-pointer
    `,
  ];
});

export const FilterTopWrapper = styled.div(() => {
  return [
    tw`
      flex items-center justify-between w-full 
    `,
  ];
});

export const FilterApplyButton = styled.button(({ disabled }: IButtonProps) => {
  const theme = useTheme();
  return [
    tw`
      w-full
    `,
    css`
      padding: 12px 57px;
      margin-top: 12px;
      color: #fff;
      font-weight: ${theme.fontWeight.bold};
      font-size: ${theme.fontSize.m};
      background: ${disabled ? theme.color['gray-04'] : theme.color.primary};
      border-radius: 10px;
      border: unset;
    `,
  ];
});

export const DateRangeWrapper = styled.div(() => {
  const theme = useTheme();
  return [
    css`
      margin-top: 16px;
      & .rdrMonthAndYearWrapper {
        padding-top: unset;
      }

      & .rdrDateRangeWrapper {
        border-radius: 10px;
        border: 1px solid ${theme.color['gray-03']};
      }
    `,
  ];
});
