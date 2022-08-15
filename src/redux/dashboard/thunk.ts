import { StatResponse } from '@redux/webSerfer.type';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import apiClient from './service';

interface MyKnownError {
  errorMessage: string;
}

const name = 'dashboard';

export const getStat = createAsyncThunk<
  StatResponse, // 성공 시 리턴 타입
  void, // input type
  { rejectValue: MyKnownError } // thunkApi 정의({dispatch?, state?, extra?, rejectValue?})
>(`${name}/getStat`, async (undefined, thunkApi) => {
  try {
    const data = await apiClient.getStat();
    return data;
  } catch (e) {
    return thunkApi.rejectWithValue({
      errorMessage: '알 수 없는 에러가 발생했습니다.',
    });
  }
});

export const refreshStat = createAsyncThunk<
  StatResponse, // 성공 시 리턴 타입
  void, // input type
  { rejectValue: MyKnownError } // thunkApi 정의({dispatch?, state?, extra?, rejectValue?})
>(`${name}/refreshStat`, async (undefined, thunkApi) => {
  try {
    const data = await apiClient.refreshStat();
    return data;
  } catch (e) {
    return thunkApi.rejectWithValue({
      errorMessage: '알 수 없는 에러가 발생했습니다.',
    });
  }
});
