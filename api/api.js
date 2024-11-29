// API

import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(
      error.response?.data?.message || 'Erro desconhecido, tente de novo'
    )
  }
)

export default api;