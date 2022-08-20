import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { getHistoryList, deleteHistoryItem } from './thunk';
import { RootState } from '../store';
import { HistoryListReponse, HistoryListRequest } from '../webSerfer.type';

interface HistoryState {
  histories: HistoryListReponse;
  filter: HistoryListRequest;
}

const initialState: HistoryState = {
  histories: undefined,
  filter: {
    startDate: undefined,
    endDate: undefined,
    keyword: '',
  },
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistories(state, { payload }) {
      state.histories = payload;
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getHistoryList.fulfilled,
      (state, { payload }: PayloadAction<HistoryListReponse>) => {
        state.histories = payload;
      }
    );

    builder.addCase(deleteHistoryItem.fulfilled, (state, { payload: id }) => {
      const deletedList = state.histories?.filter(
        ({ id: itemId }) => itemId !== id
      );
      state.histories = deletedList;
    });
  },
});

export const historyListSelector = (state: RootState) =>
  state.history.histories;
export const historyFilterSelector = (state: RootState) => state.history.filter;

export const { setHistories, setFilter } = historySlice.actions;
export default historySlice.reducer;
export * from './thunk';
