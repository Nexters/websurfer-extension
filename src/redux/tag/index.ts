import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getAchievements } from './thunk';
import { RootState } from '@redux/store';
import { AchievementsResponse, StatResponse } from '@redux/webSerfer.type';

const initialState: { data?: AchievementsResponse[] } = {};

export const achievementsSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAchievements.fulfilled,
      (state, { payload }: PayloadAction<AchievementsResponse[]>) => {
        console.log(payload);
        state.data = payload;
      }
    );
    builder.addCase(getAchievements.rejected, (state, action) => {
      if (action.payload) {
        console.error('에러가 발생했습니다.', action.payload.errorMessage);
      } else {
        console.error('알 수 없는 에러가 발생했습니다.', action.error);
      }
    });
  },
});

export const tagSelector = (state: RootState) => state.tag.data;

export default achievementsSlice.reducer;
export * from './thunk';
