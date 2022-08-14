import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { UserEntity, TokenResponse } from '../webSerfer.type';

import { getToken, getUser } from './thunk';
import Axios from '@utils/axios';

interface UserState {
  user: UserEntity;
  token: string;
}

const initialState: UserState = {
  user: {},
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
    setToken(state, { payload }) {
      state.token = payload;
    },
    logout(state) {
      Axios.defaults.headers.common.Authorization = '';
      state.user = {};
      state.token = '';
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
        state.user = payload;
      }
    );
  },
});

export const tokenSelector = (state: RootState) => state.user.token;
export const userSelector = (state: RootState) => state.user.user;

export const { setUser, setToken, logout } = userSlice.actions;
export default userSlice.reducer;
export * from './thunk';
