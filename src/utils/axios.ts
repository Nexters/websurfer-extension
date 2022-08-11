import axios from 'axios';
import adapter from '@vespaiach/axios-fetch-adapter';
import 'regenerator-runtime/runtime.js';

export default axios.create({
  baseURL: 'https://api.websurfer.ga',
  withCredentials: true,
  adapter,
});
