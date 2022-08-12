import React from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import { SearchBar, CompactItem, FullItem } from '../../Commons';

import * as S from './MainHistory.styled';

import { ZoomIcon, ZoomoutIcon } from '@assets/img/svg-icon-paths';

import { HistoryListReponse, HistoryEntity } from '@redux/webSerfer.type';
import { historyListSelector } from '@redux/history';

type Props = {
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
  isFocus: boolean;
};

interface accObj {
  [key: string]: HistoryListReponse;
}

const MainHistory = ({ isFocus, setIsFocus }: Props) => {
  const historyList = useSelector(historyListSelector);

  const historyByVisitDate = historyList.reduce(
    (acc: accObj, val: HistoryEntity) => {
      const { updatedAt } = val;

      if (updatedAt) {
        const date = format(new Date(updatedAt), 'yyyy.MM.dd');
        const values = acc[date] || [];
        acc[date] = [...values, val];
      }

      return acc;
    },
    {}
  );

  const renderHistory = () => {
    const Comp = isFocus ? FullItem : CompactItem;

    const values = Object.entries(historyByVisitDate);

    return values.map(
      ([date, histories]: [string, HistoryListReponse], index: number) => {
        return (
          <>
            {index !== 0 && <S.Divider />}
            <S.DateCategroyWrapper key={date}>
              <S.CategoryDate>{date}</S.CategoryDate>
              {histories.map((value) => {
                return <Comp key={value.id} {...value} />;
              })}
            </S.DateCategroyWrapper>
          </>
        );
      }
    );
  };

  return (
    <div>
      <S.TitleWrapper>
        <S.MainTitle>방문 기록</S.MainTitle>

        <S.ZoomIcon
          alt="zoom"
          src={isFocus ? ZoomoutIcon : ZoomIcon}
          onClick={() => setIsFocus(!isFocus)}
        ></S.ZoomIcon>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <SearchBar />
        <S.HistoryListWrapper>{renderHistory()}</S.HistoryListWrapper>
      </S.ContentWrapper>
    </div>
  );
};

export default MainHistory;
