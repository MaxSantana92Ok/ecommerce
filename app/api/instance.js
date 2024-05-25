/* eslint-disable prettier/prettier */
import axios from 'axios';
import {toast} from 'sonner';

const API = axios.create({
  baseURL: 'http://localhost:3001',
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error) toast.error(`${error.message}`);
    return error;
  },
);

export default API;
