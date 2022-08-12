import { AxiosResponse } from 'axios';

import Axios from '@utils/axios';

const getData = ({ data }: AxiosResponse) => data;

type CreateHistoryParamType = {
  href: string;
  title: string;
};

type IncreaseDurationParamType = {
  id: number;
  seconds: number;
};

const apis = {
  getList() {
    return Axios.get('/histories').then(getData);
  },

  createHistory(param: CreateHistoryParamType) {
    return Axios.post('/histories', param).then(getData);
  },

  deleteHistory(id: string) {
    return Axios.delete(`/histories/${id}`).then(getData);
  },

  increaseDuration({ id, seconds }: IncreaseDurationParamType) {
    return Axios.patch(`/histories/${id}/increase`, {
      amount: seconds,
    }).then(getData);
  },
};

export default apis;
