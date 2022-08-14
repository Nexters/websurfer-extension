import React, { useEffect, useState } from 'react';

import Main from '@components/Main/Main';
import BeforeLogin from '@components/Main/DummyMain/DummyMain';
import NoData from '@components/Main/NoDataPage/NoDataPage';

import { getStat } from '@redux/dashboard';
import { getUser, userSelector, setToken } from '@redux/user';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { historyListSelector, getHistoryList } from '@redux/history';

import Axios from '@utils/axios';
interface Props {
  title: string;
}

const Options = (props: Props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const histories = useAppSelector(historyListSelector);

  const listener = async (event: any) => {
    const { type, payload } = event.detail;

    switch (type) {
      case 'RESPONSE_TOKEN': {
        const { token } = payload;
        if (token) {
          Axios.defaults.headers.common.Authorization = 'Bearer ' + token;

          dispatch(setToken(token));
          await dispatch(getUser());
          await dispatch(getHistoryList({}));
          await dispatch(getStat());
        }
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('WEBSURFER_RELAY_RESPONSE', listener);
      window.dispatchEvent(
        new CustomEvent('WEBSURFER_RELAY_REQUEST', {
          detail: {
            type: 'REQUEST_TOKEN',
          },
        })
      );
    }, 500);
  }, []);

  const PrintMainComponent = (): React.ReactElement => {
    if (navigator.onLine) {
      if (user.id) {
        if (histories.length) {
          return <Main />;
        } else {
          return <NoData />;
        }
      } else {
        return <BeforeLogin />;
      }
    }
    return <>인터넷에 연결되어 있지 않습니다.</>;
  };

  return PrintMainComponent();
};

export default Options;
