import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:5000/api/v1';

// Add a request interceptor to add token to headers
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default axios;
