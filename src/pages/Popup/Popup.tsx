import React, { useEffect } from 'react';
import format from 'date-fns/format';

import * as S from './Popup.styled';

import { SearchBar, FullItem } from '@components/Commons';

import { HomeIcon, CloseIcon } from '@assets/img/svg-icon-paths';

import { useAppSelector, useAppDispatch } from '@redux/store';
import { HistoryListReponse, HistoryEntity } from '@redux/webSerfer.type';
import { historyListSelector, getHistoryList } from '@redux/history';

import Axios from '@utils/axios';

interface accObj {
  [key: string]: HistoryListReponse;
}

const Popup = () => {
  const historyList = useAppSelector(historyListSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    Axios.defaults.headers.common.Authorization =
      'Bearer ' + process.env.TEMPORARY_TOKEN;

    dispatch(getHistoryList({}));
  }, [dispatch]);

  const goApp = () => {
    window.chrome.tabs.create({
      url: window.chrome.runtime.getURL('/options.html'),
    });
  };

  const renderTop = () => {
    return (
      <S.TopWrapper>
        <S.HomeWrapper onClick={goApp}>
          <S.HomeIcon alt="home-icon" src={HomeIcon}></S.HomeIcon>
          <S.HomeSpan>홈으로 이동</S.HomeSpan>
        </S.HomeWrapper>
        <S.HomeIcon
          alt="close-icon"
          src={CloseIcon}
          onClick={window.close}
        ></S.HomeIcon>
      </S.TopWrapper>
    );
  };

  const renderMiddle = () => {
    return (
      <S.MiddleWrapper>
        <S.MiddleTitleWrapper>
          <S.SubTitle>Hi Shaka Shaka,</S.SubTitle>
          <S.MainTitle>아까 만났던 파도를 찾고 있나요?</S.MainTitle>
        </S.MiddleTitleWrapper>
        <SearchBar hasFilter={true} />
      </S.MiddleWrapper>
    );
  };

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
    const values = Object.entries(historyByVisitDate);
    return values.map(
      ([date, histories]: [string, HistoryListReponse], index: number) => {
        return (
          <div key={date}>
            {index !== 0 && <S.Divider />}
            <S.DateCategroyWrapper>
              <S.CategoryDate>{date}</S.CategoryDate>
              {histories.map((value) => {
                return <FullItem key={value.id} {...value} />;
              })}
            </S.DateCategroyWrapper>
          </div>
        );
      }
    );
  };

  const renderBottom = () => {
    return <S.BottomWrapper>{renderHistory()}</S.BottomWrapper>;
  };

  return (
    <S.Wrapper>
      {renderTop()}
      {renderMiddle()}
      {renderBottom()}
    </S.Wrapper>
  );
};

export default Popup;
