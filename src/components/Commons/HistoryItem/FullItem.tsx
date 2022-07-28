import React from 'react';

import * as S from './style';

import { IrefinedItem } from '../../../utils/mock';

import { EyeIcon } from '../../../assets/img/svg-icon-paths';

const FullItem = ({ icon, title, url, visitCount }: IrefinedItem) => {
  return (
    <S.FullItemWrapper>
      <S.FullLeftWrapper>
        <S.ItemIcon alt="history-icon" src={icon}></S.ItemIcon>
        <S.FullItemSpan>{title}</S.FullItemSpan>
      </S.FullLeftWrapper>
      <S.FullItemSpan flex={1} maxWidth={'40%'}>
        {url}
      </S.FullItemSpan>
      <S.VisitCountSpan>
        <img alt="count-icon" src={EyeIcon} />
        {visitCount}
      </S.VisitCountSpan>
    </S.FullItemWrapper>
  );
};

export default FullItem;
