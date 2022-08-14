import React, { useEffect, useState } from 'react';
import { format, isToday } from 'date-fns';

import * as S from './Popup.styled';

import { SearchBar, FullItem } from '@components/Commons';
import LoginTitle from '@components/Popup/LoginTitle';
import NoListWithKeyword from '@components/Commons/NoListWithKeyword';

import { HomeIcon, CloseIcon, Oceanographer } from '@assets/img/svg-icon-paths';

import { useAppSelector, useAppDispatch } from '@redux/store';
import { HistoryListReponse, HistoryEntity } from '@redux/webSerfer.type';
import { historyListSelector, getHistoryList } from '@redux/history';
import { getUser, userSelector, setToken } from '@redux/user';
import { filterOnceAppliedSelector } from '@redux/common';

interface accObj {
  [key: string]: HistoryListReponse;
}

const Popup = () => {
  const [keyword, setKeyword] = useState<string | undefined>(undefined);

  const user = useAppSelector(userSelector);
  const historyList = useAppSelector(historyListSelector);
  const isFilterOnceApplied = useAppSelector(filterOnceAppliedSelector);
  const dispatch = useAppDispatch();

  const loggedIn = user.id;
  const hasData = Boolean(historyList.length);

  useEffect(() => {
    chrome.storage.sync.get(['websurferToken'], async (result) => {
      const { websurferToken } = result;

      if (websurferToken) {
        dispatch(setToken(websurferToken));
        await dispatch(getUser());
        await dispatch(
          getHistoryList({
            startDate: undefined,
            endDate: undefined,
            keyword: undefined,
          })
        );
      }
    });
  }, [dispatch]);

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
      <S.MiddleWrapper
        bgWhite={!loggedIn || (loggedIn && !hasData && !isFilterOnceApplied)}
      >
        {(loggedIn && hasData) || isFilterOnceApplied ? (
          <>
            <S.MiddleTopWrapper>
              <S.MiddleTitleWrapper>
                <S.SubTitle>이번주 김넥터 님은</S.SubTitle>
                <S.MainTitle>열정 뿜뿜 해양학자</S.MainTitle>
              </S.MiddleTitleWrapper>
              <S.MainImage src={Oceanographer} alt="해양학자가 서핑하는 모습" />
            </S.MiddleTopWrapper>
            <SearchBar
              hasFilter={true}
              rawKeyword={keyword}
              setRawKeyword={setKeyword}
            />
          </>
        ) : (
          <LoginTitle goApp={goApp} hasData={hasData} />
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
    <S.Wrapper showBottom={loggedIn && hasData}>
      {renderTop()}
      {renderMiddle()}
      {loggedIn && hasData ? (
        renderBottom()
      ) : !hasData && keyword ? (
        <S.NoListWrapper>
          <NoListWithKeyword keyword={keyword} />
        </S.NoListWrapper>
      ) : (
        ''
      )}
    </S.Wrapper>
  );
};

export default Popup;
