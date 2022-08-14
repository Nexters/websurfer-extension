import React from 'react';

import { useAppDispatch } from '@redux/store';
import { setUser, setToken } from '@redux/user';

import Axios from '@utils/axios';

const NoData = () => {
  const dispatch = useAppDispatch();
  const onClickLogout = () => {
    Axios.defaults.headers.common.Authorization = '';
    dispatch(setUser({}));
    dispatch(setToken(''));
    window.dispatchEvent(
      new CustomEvent('WEBSURFER_RELAY_REQUEST', {
        detail: {
          type: 'DELETE_TOKEN',
        },
      })
    );
  };

  return (
    <div>
      NO data<button onClick={onClickLogout}>Logout</button>
    </div>
  );
};

export default NoData;
