import axios, { AxiosRequestConfig, HeadersDefaults } from 'axios';
import adapter from '@vespaiach/axios-fetch-adapter';
import 'regenerator-runtime/runtime.js';

export interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://api.websurfer.ga',
  withCredentials: true,
  adapter,
};

export default axios.create(axiosConfig);
