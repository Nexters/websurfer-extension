import { createAsyncThunk } from '@reduxjs/toolkit';

import apiClient from './service';
import {
  TokenRequestParam,
  TokenResponse,
  UserEntity,
} from '../webSerfer.type';

const name = 'user';

export const getToken = createAsyncThunk(
  `${name}/getToken`,
  async (params: TokenRequestParam) => {
    const data: TokenResponse = await apiClient.getToken(params);
    return data;
  }
);

export const getUser = createAsyncThunk(`${name}/getUser`, async () => {
  const data: UserEntity = await apiClient.getUser();
  return data;
});
