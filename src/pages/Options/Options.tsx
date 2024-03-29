import React, { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';

import Main from '@components/Main/Main';
import BeforeLogin from '@components/Main/DummyMain/DummyMain';
import NoData from '@components/Main/NoDataPage/NoDataPage';

import { getUser, userSelector, setToken } from '@redux/user';
import { historyListSelector, getHistoryList } from '@redux/history';
import { useAppDispatch, useAppSelector } from '@redux/store';
import {
  filterOnceAppliedSelector,
  mainLoadingSelector,
  setMainLoading,
} from '@redux/common';
import { getStat, getStatPrev } from '@redux/dashboard';
import { getAchievements } from '@redux/tag';

import theme from '@styles/theme';

interface Props {
  title: string;
}

const Options = (props: Props) => {
  const [keyword, setKeyword] = useState<string | undefined>(undefined);

  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const histories = useAppSelector(historyListSelector);
  const isFilterOnceApplied = useAppSelector(filterOnceAppliedSelector);
  const hasData = Boolean(histories?.length);
  const loading = useAppSelector(mainLoadingSelector);

  const initUser = async (token: string) => {
    dispatch(setMainLoading(true));
    dispatch(setToken(token));
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
    await dispatch(getAchievements());
    window.dispatchEvent(
      new CustomEvent('WEBSURFER_RELAY_REQUEST', {
        detail: {
          type: 'REQUEST_SIGNING',
          payload: {
            token,
          },
        },
      })
    );

    dispatch(setMainLoading(false));
  };

  // const listener = async (event) => {
  //   const { type, payload } = event.detail;

  //   switch (type) {
  //     case 'RESPONSE_TOKEN': {
  //       const { token } = payload;

  //       if (token && !storeToken) {
  //         initUser(token);
  //       }
  //     }
  //   }
  // };

  useEffect(() => {
    // setTimeout(() => {
    //   window.addEventListener('WEBSURFER_RELAY_RESPONSE', listener);
    //   window.dispatchEvent(
    //     new CustomEvent('WEBSURFER_RELAY_REQUEST', {
    //       detail: {
    //         type: 'REQUEST_TOKEN',
    //       },
    //     })
    //   );
    // }, 500);
    const token = localStorage.getItem('websurfer-token');
    if (token) {
      initUser(token);
    }
  }, []);

  const PrintMainComponent = (): React.ReactElement => {
    if (navigator.onLine) {
      if (user.id) {
        if (hasData || isFilterOnceApplied) {
          return (
            <Main user={user} rawKeyword={keyword} setRawKeyword={setKeyword} />
          );
        } else {
          return <NoData />;
        }
      } else {
        return <BeforeLogin />;
      }
    }
    return <>인터넷에 연결되어 있지 않습니다.</>;
  };

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <ScaleLoader color={theme.color.primary} />
      </div>
    );
  }

  return PrintMainComponent();
};

export default Options;
