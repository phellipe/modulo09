import axios from 'axios';

const api = axios.create({
  baseURL: 'httt://localhost:3333',
});

export default api;
