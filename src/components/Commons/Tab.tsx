import React from 'react';
import * as S from './Tab.Styled';

type Props = {};

const Tab = (props: Props) => {
  return (
    <S.TabWrapper>
      <S.TabItemWrapper isActive>이번 주</S.TabItemWrapper>
      <S.TabItemWrapper>지난주</S.TabItemWrapper>
      <S.TabItemWrapper>기간 선택</S.TabItemWrapper>
    </S.TabWrapper>
  );
};

export default Tab;
