import { AxiosResponse } from 'axios';

import Axios from '@utils/axios';

const getData = ({ data }: AxiosResponse) => data;

const apis = {
  getStat() {
    return Axios.get('/stat').then(getData);
  },

  refreshStat() {
    return Axios.post('/stat/refresh').then(getData);
  },
};

export default apis;
