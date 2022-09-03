import React, { useEffect, useState } from 'react';
import { format, isToday } from 'date-fns';
import { ToastContainer, Slide } from 'react-toastify';

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
import {
  getStat,
  dashboardAchievementSelector,
  getStatPrev,
} from '@redux/dashboard';

import 'react-toastify/dist/ReactToastify.css';

interface accObj {
  [key: string]: HistoryListReponse;
}

const Popup = () => {
  const [keyword, setKeyword] = useState<string | undefined>(undefined);

  const user = useAppSelector(userSelector);
  const historyList = useAppSelector(historyListSelector);
  const isFilterOnceApplied = useAppSelector(filterOnceAppliedSelector);
  const achievement = useAppSelector(dashboardAchievementSelector);
  const dispatch = useAppDispatch();

  const loggedIn = Boolean(user.id);
  const hasData = Boolean(historyList.length);

  useEffect(() => {
    chrome.storage.local.get(['websurferToken'], async (result) => {
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
        await dispatch(getStat());
        await dispatch(getStatPrev());
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
          <S.HomeSpan>대시보드로 이동</S.HomeSpan>
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
        {loggedIn && (hasData || isFilterOnceApplied) ? (
          <>
            <S.MiddleTopWrapper>
              <S.MiddleTitleWrapper>
                <S.SubTitle>이번 주 서퍼님은</S.SubTitle>
                <S.MainTitle>
                  {achievement?.name || '열정 뿜뿜 해양학자'}
                </S.MainTitle>
              </S.MiddleTitleWrapper>
              <S.MainImage
                src={achievement?.imageUrl || Oceanographer}
                alt="해양학자가 서핑하는 모습"
              />
            </S.MiddleTopWrapper>
            <SearchBar
              hasFilter={true}
              rawKeyword={keyword}
              setRawKeyword={setKeyword}
              isPopup={true}
            />
          </>
        ) : (
          <LoginTitle goApp={goApp} loggedIn={loggedIn} />
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
    <>
      <S.Wrapper showBottom={loggedIn && hasData}>
        {renderTop()}
        {renderMiddle()}
        {loggedIn && hasData ? (
          renderBottom()
        ) : !hasData && isFilterOnceApplied ? (
          <S.NoListWrapper>
            <NoListWithKeyword keyword={keyword} />
          </S.NoListWrapper>
        ) : (
          ''
        )}
      </S.Wrapper>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="dark"
        closeButton={false}
        transition={Slide}
        style={{
          textAlign: 'center',
          borderRadius: '5px',
          fontWeight: '700',
          fontSize: '16px',
          width: '240px',
        }}
      />
    </>
  );
};

export default Popup;
