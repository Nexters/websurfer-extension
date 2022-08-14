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
  };

  return (
    <div>
      NO data<button onClick={onClickLogout}>Logout</button>
    </div>
  );
};

export default NoData;
