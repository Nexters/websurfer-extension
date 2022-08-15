import React from 'react';

import * as S from './style';

import { LogoIcon } from '@assets/img/svg-icon-paths';
import { HistoryEntity } from '@redux/webSerfer.type';

const CompactItem = ({ title, href, website }: HistoryEntity) => {
  return (
    <S.CompactItemWrapper onClick={() => window.open(href, '_blank')}>
      {
        <S.ItemIcon
          alt="history-icon"
          src={
            website?.faviconUrl?.startsWith('/images')
              ? LogoIcon
              : website?.faviconUrl || LogoIcon
          }
        />
      }
      <S.ItemSpan>{title}</S.ItemSpan>
    </S.CompactItemWrapper>
  );
};

export default CompactItem;
