import React, { useEffect, useState } from 'react';

import Main from '@components/Main/Main';
import BeforeLogin from '@components/Main/DummyMain/DummyMain';
import NoData from '@components/Main/NoDataPage/NoDataPage';

import { getUser, userSelector, setToken } from '@redux/user';
import { historyListSelector, getHistoryList } from '@redux/history';
import { useAppDispatch, useAppSelector } from '@redux/store';

interface Props {
  title: string;
}

const Options = (props: Props) => {
  const [keyword, setKeyword] = useState<string | undefined>(undefined);

  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const histories = useAppSelector(historyListSelector);
  const hasData = Boolean(histories.length);

  const listener = async (event) => {
    const { type, payload } = event.detail;

    switch (type) {
      case 'RESPONSE_TOKEN': {
        const { token } = payload;

        if (token) {
          dispatch(setToken(token));
          await dispatch(getUser());
          await dispatch(getHistoryList({}));
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
    }, 1000);
  }, []);

  const noDataWithKeyword = !hasData && (keyword || keyword === '');

  const PrintMainComponent = (): React.ReactElement => {
    if (navigator.onLine) {
      if (user.id) {
        if (hasData || noDataWithKeyword) {
          return <Main rawKeyword={keyword} setRawKeyword={setKeyword} />;
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
