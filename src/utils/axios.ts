import axios from 'axios';
import adapter from '@vespaiach/axios-fetch-adapter';
import 'regenerator-runtime/runtime.js';

const instance = axios.create({
  baseURL: 'https://api.websurfer.ga',
  withCredentials: false,
  adapter,
});

export default instance;
