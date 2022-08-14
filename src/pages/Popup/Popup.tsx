import React, { useEffect } from 'react';
import { format, isToday } from 'date-fns';

import * as S from './Popup.styled';

import { SearchBar, FullItem } from '@components/Commons';
import LoginTitle from '@components/Popup/LoginTitle';

import { HomeIcon, CloseIcon } from '@assets/img/svg-icon-paths';

import { useAppSelector, useAppDispatch } from '@redux/store';
import { HistoryListReponse, HistoryEntity } from '@redux/webSerfer.type';
import { historyListSelector, getHistoryList } from '@redux/history';
import { getUser, userSelector, setToken } from '@redux/user';

import Axios from '@utils/axios';

interface accObj {
  [key: string]: HistoryListReponse;
}

const Popup = () => {
  const user = useAppSelector(userSelector);
  const historyList = useAppSelector(historyListSelector);
  const dispatch = useAppDispatch();

  const loggedIn = user.id;
  const hasData = historyList.length;

  useEffect(() => {
    chrome.storage.sync.get(['websurferToken'], async (result) => {
      const { websurferToken } = result;
      console.log({ result });
      if (websurferToken) {
        dispatch(setToken(websurferToken));
        await dispatch(getUser());
        await dispatch(getHistoryList({}));
      }
    });
  }, []);

  const goApp = () => {
    window.chrome.tabs.create({
      url: 'https://websurfer-web.vercel.app',
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
      <S.MiddleWrapper loggedIn={loggedIn}>
        {loggedIn ? (
          <>
            <S.MiddleTitleWrapper>
              <S.SubTitle>Hi Shaka Shaka,</S.SubTitle>
              <S.MainTitle>아까 만났던 파도를 찾고 있나요?</S.MainTitle>
            </S.MiddleTitleWrapper>
            <SearchBar hasFilter={true} />
          </>
        ) : (
          <LoginTitle goApp={goApp} />
        )}
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
              <S.CategoryDate>
                {isToday(new Date(date)) ? 'Today' : date}
              </S.CategoryDate>
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
    <S.Wrapper loggedIn={loggedIn}>
      {renderTop()}
      {renderMiddle()}
      {loggedIn && renderBottom()}
    </S.Wrapper>
  );
};

export default Popup;
