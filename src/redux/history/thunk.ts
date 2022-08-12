import { createAsyncThunk } from '@reduxjs/toolkit';

import apiClient from './service';
import { HistoryListReponse, HistoryListRequest } from '../webSerfer.type';

const name = 'history';

export const getHistoryList = createAsyncThunk(
  `${name}/getHistoryList`,
  async (params: HistoryListRequest) => {
    const data: HistoryListReponse = await apiClient.getList(params);
    return data;
  }
);
