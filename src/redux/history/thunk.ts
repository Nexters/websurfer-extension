import { createAsyncThunk } from '@reduxjs/toolkit';

import apiClient from './service';
import { HistoryListReponse } from '../webSerfer.type';

const name = 'history';

export const getHistoryList = createAsyncThunk(
  `${name}/getHistoryList`,
  async () => {
    const data: HistoryListReponse = await apiClient.getList();
    return data;
  }
);
