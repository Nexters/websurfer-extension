import { createAsyncThunk } from '@reduxjs/toolkit';

import apiClient from './service';
import { HistoryListReponse, HistoryListRequest } from '../webSerfer.type';
import { RootState } from '../store';
import { setHistories } from '../history';

const name = 'history';

export const getHistoryList = createAsyncThunk(
  `${name}/getHistoryList`,
  async (params: HistoryListRequest) => {
    const data: HistoryListReponse = await apiClient.getList(params);
    return data;
  }
);

export const deleteHistoryItem = createAsyncThunk(
  `${name}/deleteHistoryItem`,
  async (id: number, { rejectWithValue, getState, dispatch }) => {
    try {
      await apiClient.delteHistory(id);

      const { history }: RootState = getState();

      const deletedList = history.histories?.filter(
        ({ id: itemId }) => itemId !== id
      );
      dispatch(setHistories(deletedList));
    } catch (e) {
      rejectWithValue(e);
    }
  }
);
