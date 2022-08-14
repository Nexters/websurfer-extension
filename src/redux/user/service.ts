import { AxiosResponse } from 'axios';

import Axios from '@utils/axios';

import { TokenRequestParam } from '../webSerfer.type';

const getData = ({ data }: AxiosResponse) => data;

const apis = {
  getToken(params: TokenRequestParam) {
    return Axios.post('/auth/sign-in', params).then(getData);
  },

  getUser() {
    return Axios.get('/me').then(getData);
  },
};

export default apis;
