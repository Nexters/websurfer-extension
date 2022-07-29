import React from 'react';

import { SearchBar, CompactItem, FullItem } from '../../Commons';

import * as S from './MainHistory.styled';

import { ZoomIcon } from '../../../assets/img/svg-icon-paths';

import { chromeHistory, IrefinedItem } from '../../../utils/mock';

type Props = {
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
  isFocus: boolean;
};

const MainHistory = ({ isFocus, setIsFocus }: Props) => {
  const historyByVisitDate = chromeHistory.reduce((acc, val: IrefinedItem) => {
    const { lastVisitDate } = val;

    if (lastVisitDate) {
      const values = acc[lastVisitDate] || [];
      acc[lastVisitDate] = [...values, val];
    }

    return acc;
  }, {});

  const renderHistory = () => {
    const Comp = isFocus ? FullItem : CompactItem;

    const values = Object.entries(historyByVisitDate);

    console.log({ values });

    return values.map(([date, histories]: [string, IrefinedItem[]]) => {
      return (
        <div key={date}>
          <S.CategoryDate>{date}</S.CategoryDate>
          {histories.map((value) => {
            return <Comp key={value.id} {...value} />;
          })}
        </div>
      );
    });
  };

  return (
    <S.HistoryWrapper>
      <S.TitleWrapper>
        <S.MainTitle>방문 기록</S.MainTitle>
        <img
          alt="zoom"
          src={ZoomIcon}
          onClick={() => setIsFocus(!isFocus)}
        ></img>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <SearchBar />
        <S.HistoryListWrapper>{renderHistory()}</S.HistoryListWrapper>
      </S.ContentWrapper>
    </S.HistoryWrapper>
  );
};

export default MainHistory;
