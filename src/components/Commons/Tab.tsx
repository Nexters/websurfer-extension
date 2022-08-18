import React from 'react';
import * as S from './Tab.Styled';

type Props = {
  items: {
    title: string;
    onClick?: () => any;
    isActive?: boolean;
    disabled?: boolean;
  }[];
};

const Tab = ({ items }: Props) => {
  return (
    <S.TabWrapper>
      {items.map(({ title, onClick, isActive, disabled }, number) => (
        <S.TabItemWrapper
          isActive={isActive}
          key={number}
          disabled={disabled}
          onClick={!disabled ? onClick : undefined}
        >
          {title}
        </S.TabItemWrapper>
      ))}
    </S.TabWrapper>
  );
};

export default Tab;
