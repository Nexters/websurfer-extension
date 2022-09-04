import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getStat, refreshStat, getStatPrev } from './thunk';
import { RootState } from '@redux/store';
import { StatResponse } from '@redux/webSerfer.type';

interface DashboardState {
  status?: 'loading' | 'finished' | 'error';
  stat?: StatResponse;
  statPrev?: StatResponse;
}

const initialState: DashboardState = {
  stat: undefined,
  statPrev: undefined,
  status: undefined,
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    start: (state) => {
      state.status = 'loading';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getStat.fulfilled,
      (state, { payload }: PayloadAction<StatResponse>) => {
        state.stat = payload;
      }
    );
    builder.addCase(getStat.rejected, (state, action) => {
      if (action.payload) {
        console.error('에러가 발생했습니다.', action.payload.errorMessage);
      } else {
        console.error('알 수 없는 에러가 발생했습니다.', action.error);
      }
    });

    builder.addCase(
      getStatPrev.fulfilled,
      (state, { payload }: PayloadAction<StatResponse>) => {
        state.statPrev = payload;
      }
    );
    builder.addCase(getStatPrev.rejected, (state, action) => {
      if (action.payload) {
        console.error('에러가 발생했습니다.', action.payload.errorMessage);
      } else {
        console.error('알 수 없는 에러가 발생했습니다.', action.error);
      }
    });

    builder.addCase(
      refreshStat.fulfilled,
      (state, { payload }: PayloadAction<StatResponse>) => {
        state.stat = payload;
      }
    );

    builder.addCase(refreshStat.rejected, (state, action) => {
      if (action.payload) {
        console.error('에러가 발생했습니다.', action.payload.errorMessage);
      } else {
        console.error('알 수 없는 에러가 발생했습니다.', action.error);
      }
    });
  },
});

export const dashboardStatSelector = (state: RootState) => state.dashboard.stat;
export const dashboardStatPrevSelector = (state: RootState) =>
  state.dashboard.statPrev;
export const dashboardAchievementSelector = (state: RootState) =>
  state.dashboard.stat?.achievement;
export const dashboardAchievementPrevSelector = (state: RootState) =>
  state.dashboard.statPrev?.achievement;

export default dashboardSlice.reducer;
export * from './thunk';
