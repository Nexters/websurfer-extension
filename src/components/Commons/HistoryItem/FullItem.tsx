import React, { useState } from 'react';

import { LogoIcon, DotsIcon } from '@assets/img/svg-icon-paths';

import * as S from './style';

import { HistoryEntity } from '@redux/webSerfer.type';
import { useAppDispatch } from '@redux/store';
import { deleteHistoryItem } from '@redux/history';

const FullItem = ({ title, href, id }: HistoryEntity) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
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
          setIsDropdownOpen(!isDropdownOpen);
        }}
      >
        <img alt="count-icon" src={DotsIcon} />
        {isDropdownOpen && (
          <S.Tooltip
            onClick={(e) => {
              e.preventDefault();
              dispatch(deleteHistoryItem(id));
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
