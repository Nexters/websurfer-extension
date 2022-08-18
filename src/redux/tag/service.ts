import { AxiosResponse } from 'axios';

import Axios from '@utils/axios';

const getData = ({ data }: AxiosResponse) => data;

const apis = {
  getAchievements() {
    return Axios.get('/achievements').then(getData);
  },
};

export default apis;
