import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { UserEntity, TokenResponse } from '../webSerfer.type';

import { getToken, getUser } from './thunk';
import Axios from '@utils/axios';

interface UserState {
  userInfo: UserEntity;
  token: string;
}

const initialState: UserState = {
  userInfo: {},
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.userInfo = payload;
    },
    setToken(state, { payload }) {
      Axios.defaults.headers.common.Authorization = payload
        ? 'Bearer ' + payload
        : '';
      state.token = payload;
    },
    logout(state) {
      state.userInfo = {};

      Axios.defaults.headers.common.Authorization = '';
      state.token = '';

      localStorage.removeItem('websurfer-token');
      window.dispatchEvent(
        new CustomEvent('WEBSURFER_RELAY_REQUEST', {
          detail: {
            type: 'DELETE_TOKEN',
          },
        })
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getToken.fulfilled,
      (state, { payload: { access } }: PayloadAction<TokenResponse>) => {
        state.token = access;
        Axios.defaults.headers.common.Authorization = access;

        localStorage.setItem('websurfer-token', access);
        window.dispatchEvent(
          new CustomEvent('WEBSURFER_RELAY_REQUEST', {
            detail: {
              type: 'REQUEST_SIGNING',
              payload: {
                token: access,
              },
            },
          })
        );
      }
    );

    builder.addCase(
      getUser.fulfilled,
      (state, { payload }: PayloadAction<UserEntity>) => {
        state.userInfo = payload;
      }
    );
  },
});

export const tokenSelector = (state: RootState) => state.user.token;
export const userSelector = (state: RootState) => state.user.userInfo;

export const { setUser, setToken, logout } = userSlice.actions;
export default userSlice.reducer;
export * from './thunk';
