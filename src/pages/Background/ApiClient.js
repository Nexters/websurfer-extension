import axios from 'axios';

const getData = ({ data }) => data;

export default class ApiClient {
  constructor({ token }) {
    this.apiClient = axios.create({
      baseURL: 'https://api.websurfer.ga',
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  getList() {
    return this.apiClient.get('/histories').then(getData);
  }

  createHistory(param) {
    return this.apiClient.post('/histories', param).then(getData);
  }

  delteHistory(id) {
    return this.apiClient.delete(`/histories/${id}`).then(getData);
  }

  increaseDuration({ id, seconds }) {
    return this.apiClient
      .patch(`/histories/${id}/increase`, {
        amount: seconds,
      })
      .then(getData);
  }
}
