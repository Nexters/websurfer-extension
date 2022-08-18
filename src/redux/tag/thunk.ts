import { AchievementsResponse } from '@redux/webSerfer.type';
import { createAsyncThunk } from '@reduxjs/toolkit';

import apiClient from './service';

interface MyKnownError {
  errorMessage: string;
}

const name = 'tag';

export const getAchievements = createAsyncThunk<
  AchievementsResponse[], // 성공 시 리턴 타입
  void, // input type
  { rejectValue: MyKnownError } // thunkApi 정의({dispatch?, state?, extra?, rejectValue?})
>(`${name}/getAchievements`, async (undefined, thunkApi) => {
  try {
    const data = await apiClient.getAchievements();
    return data;
  } catch (e) {
    return thunkApi.rejectWithValue({
      errorMessage: '알 수 없는 에러가 발생했습니다.',
    });
  }
});
