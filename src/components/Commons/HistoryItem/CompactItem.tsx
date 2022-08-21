import React from 'react';

import * as S from './style';

import { HistoryEntity } from '@redux/webSerfer.type';
import { refinedFaviconUrl } from '@utils/index';

const NoDataFavicon = './assets/basic_favicon_32.png';

const CompactItem = ({ title, href, website }: HistoryEntity) => {
  return (
    <S.CompactItemWrapper onClick={() => window.open(href, '_blank')}>
      {
        <S.ItemIcon
          alt="history-icon"
          src={refinedFaviconUrl(website)}
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
