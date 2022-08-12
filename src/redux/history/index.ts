import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { getHistoryList } from './thunk';
import { HistoryListReponse, HistoryListRequest } from '../webSerfer.type';

interface HistoryState {
  histories: HistoryListReponse;
  filter: HistoryListRequest;
}

const initialState: HistoryState = {
  histories: [],
  filter: {},
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
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
  },
});

export default historySlice.reducer;
export * from './thunk';
