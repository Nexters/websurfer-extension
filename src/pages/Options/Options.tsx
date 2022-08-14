import React, { useEffect, useState } from 'react';

import Main from '@components/Main/Main';
import BeforeLogin from '@components/Main/BeforeLogin/BeforeLogin';

import { getUser } from '@redux/user';
import { useAppDispatch } from '@redux/store';

import Axios from '@utils/axios';
interface Props {
  title: string;
}

const Options = (props: Props) => {
  const [hasData, setHasData] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const listener = (event) => {
    const { type, payload } = event.detail;

    switch (type) {
      case 'RESPONSE_TOKEN': {
        const { token } = payload;
        Axios.defaults.headers.common.Authorization = 'Bearer ' + token;

        dispatch(getUser()).then(() => setIsLoggedIn(true));
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
      if (isLoggedIn) {
        if (hasData) {
          return <Main />;
        } else {
          return <>데이터가 없습니다.</>;
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
