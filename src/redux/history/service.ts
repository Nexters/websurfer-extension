import { AxiosResponse } from 'axios';

import Axios from '@utils/axios';
import {
  HistoryListRequest,
  CreateHistoryParamType,
  IncreaseDurationParamType,
} from '../webSerfer.type';

const getData = ({ data }: AxiosResponse) => data;

const apis = {
  getList(params: HistoryListRequest) {
    const { startDate, endDate, keyword } = params;
    return Axios.get('/histories', {
      params: {
        createdAtBetween:
          startDate && endDate ? [startDate, endDate] : undefined,
        titleInclude: keyword || undefined,
      },
    }).then(getData);
  },

  createHistory(param: CreateHistoryParamType) {
    return Axios.post('/histories', param).then(getData);
  },

  delteHistory(id: number) {
    return Axios.delete(`/histories/${id}`).then(getData);
  },

  increaseDuration({ id, seconds }: IncreaseDurationParamType) {
    return Axios.patch(`/histories/${id}/increase`, {
      amount: seconds,
    }).then(getData);
  },
};

export default apis;
