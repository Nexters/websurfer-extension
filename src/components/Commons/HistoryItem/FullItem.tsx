import React from 'react';
import { LogoIcon, DotsIcon } from '@assets/img/svg-icon-paths';

import * as S from './style';

import { HistoryEntity } from '@redux/webSerfer.type';

const FullItem = ({ title, href }: HistoryEntity) => {
  return (
    <S.FullItemWrapper onClick={() => window.open(href, '_blank')}>
      <S.FullLeftWrapper>
        <S.ItemIcon alt="history-icon" src={LogoIcon}></S.ItemIcon>
        <S.FullItemSpan>{title}</S.FullItemSpan>
      </S.FullLeftWrapper>
      <S.FullItemSpan flex={1} maxWidth={'40%'}>
        {href}
      </S.FullItemSpan>
      <S.VisitCountSpan
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img alt="count-icon" src={DotsIcon} />
      </S.VisitCountSpan>
    </S.FullItemWrapper>
  );
};

export default FullItem;
