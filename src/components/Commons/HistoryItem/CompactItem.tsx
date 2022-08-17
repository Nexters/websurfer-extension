import React from 'react';

import * as S from './style';

import { LogoIcon } from '@assets/img/svg-icon-paths';
import { HistoryEntity } from '@redux/webSerfer.type';

const NoDataFavicon = './assets/basic_favicon_32.png';

const CompactItem = ({ title, href, website }: HistoryEntity) => {
  return (
    <S.CompactItemWrapper onClick={() => window.open(href, '_blank')}>
      {
        <S.ItemIcon
          alt="history-icon"
          src={
            website?.faviconUrl?.startsWith('/images')
              ? NoDataFavicon
              : website?.faviconUrl || LogoIcon
          }
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = NoDataFavicon;
          }}
        />
      }
      <S.ItemSpan>{title}</S.ItemSpan>
    </S.CompactItemWrapper>
  );
};

export default CompactItem;
