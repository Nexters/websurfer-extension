import React from 'react';
import * as S from './Tab.Styled';

type Props = {
  items: { title: string; onClick?: () => any; isActive?: boolean }[];
};

const Tab = ({ items }: Props) => {
  return (
    <S.TabWrapper>
      {items.map(({ title, onClick, isActive }, number) => (
        <S.TabItemWrapper isActive={isActive} key={number}>
          {title}
        </S.TabItemWrapper>
      ))}
    </S.TabWrapper>
  );
};

export default Tab;
