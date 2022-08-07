import React from 'react';

import { SearchBar, CompactItem, FullItem } from '../../Commons';

import * as S from './MainHistory.styled';

import { ZoomIcon, ZoomoutIcon } from '../../../assets/img/svg-icon-paths';

import { chromeHistory, IrefinedItem } from '../../../utils/mock';

type Props = {
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
  isFocus: boolean;
};

interface accObj {
  [key: string]: IrefinedItem[];
}

const MainHistory = ({ isFocus, setIsFocus }: Props) => {
  const historyByVisitDate = chromeHistory.reduce(
    (acc: accObj, val: IrefinedItem) => {
      const { lastVisitDate } = val;

      if (lastVisitDate) {
        const values = acc[lastVisitDate] || [];
        acc[lastVisitDate] = [...values, val];
      }

      return acc;
    },
    {}
  );

  const renderHistory = () => {
    const Comp = isFocus ? FullItem : CompactItem;

    const values = Object.entries(historyByVisitDate);

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
