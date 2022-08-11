import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { getHistoryList } from './thunk';
import { HistoryListReponse } from '../webSerfer.type';

interface HistoryState {
  histories: HistoryListReponse;
}

const initialState: HistoryState = {
  histories: [],
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getHistoryList.fulfilled,
      (state, action: PayloadAction<HistoryListReponse>) => {
        state.histories = action.payload;
      }
    );
  },
});

export default historySlice.reducer;
export * from './thunk';
