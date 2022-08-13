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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getToken.fulfilled,
      (state, { payload: { access } }: PayloadAction<TokenResponse>) => {
        state.token = access;
        Axios.defaults.headers.common.Authorization = access;
        localStorage.setItem('websurfer-token', access);
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

export default userSlice.reducer;
export * from './thunk';