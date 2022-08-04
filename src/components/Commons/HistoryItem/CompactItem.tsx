import React from 'react';

import * as S from './style';

import { IrefinedItem } from '../../../utils/mock';

const CompactItem = ({ icon, title, url }: IrefinedItem) => {
  return (
    <S.CompactItemWrapper onClick={() => window.open(url, '_blank')}>
      {icon && <S.ItemIcon alt="history-icon" src={icon} />}
      <S.ItemSpan>{title}</S.ItemSpan>
    </S.CompactItemWrapper>
  );
};

export default CompactItem;
