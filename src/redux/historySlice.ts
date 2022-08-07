import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface HistoryItem {
  user: string;
  userId: number;
  href: string;
  title: string;
  description: string;
  duration: number;
}

export interface HistoryState {
  histories: HistoryItem[];
}

const initialState: HistoryState = {
  histories: [],
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    getHistories: (state, action: PayloadAction<HistoryItem[]>) => {
      state.histories = action.payload;
    },
  },
});

export const { getHistories } = historySlice.actions;

export default historySlice.reducer;
