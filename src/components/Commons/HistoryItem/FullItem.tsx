import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { LogoIcon, DotsIcon } from '@assets/img/svg-icon-paths';

import * as S from './style';

import { HistoryEntity } from '@redux/webSerfer.type';
import { useAppDispatch } from '@redux/store';
import { deleteHistoryItem } from '@redux/history';

const NoDataFavicon = './assets/basic_favicon_32.png';

const FullItem = ({ title, href, id, website }: HistoryEntity) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  return (
    <S.FullItemWrapper onClick={() => window.open(href, '_blank')}>
      <S.FullLeftWrapper>
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
        ></S.ItemIcon>
        <S.FullItemSpan>{title}</S.FullItemSpan>
      </S.FullLeftWrapper>
      <S.FullItemSpan flex={1} maxWidth={'40%'} isSub={true}>
        {href}
      </S.FullItemSpan>
      <S.VisitCountSpan
        onClick={(e) => {
          e.stopPropagation();
          setIsDropdownOpen(!isDropdownOpen);
        }}
      >
        <img alt="count-icon" src={DotsIcon} />
        {isDropdownOpen && (
          <S.Tooltip
            onClick={(e) => {
              e.preventDefault();
              dispatch(deleteHistoryItem(id));
              toast('1개의 방문기록을 삭제했습니다.');
            }}
          >
            삭제하기
          </S.Tooltip>
        )}
      </S.VisitCountSpan>
    </S.FullItemWrapper>
  );
};

export default FullItem;
