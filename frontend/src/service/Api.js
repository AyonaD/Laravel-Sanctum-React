import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,  // crucial for Sanctum cookie auth
  withXSRFToken :true
});

export default api;
