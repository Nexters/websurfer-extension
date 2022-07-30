import React from 'react';

import * as S from './style';

import { IrefinedItem } from '../../../utils/mock';

const CompactItem = ({ icon, title }: IrefinedItem) => {
  return (
    <S.CompactItemWrapper>
      {icon && <S.ItemIcon alt="history-icon" src={icon} />}
      <S.ItemSpan>{title}</S.ItemSpan>
    </S.CompactItemWrapper>
  );
};

export default CompactItem;
