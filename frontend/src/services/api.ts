import axios from 'axios';
import { useAuthStore } from '../store/authStore';
import { refreshRequest } from './authService';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const refreshApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    const hasToken = !!useAuthStore.getState().accessToken;

    const isRetryable =
      error.response?.status === 401 && hasToken && !originalRequest._retry;

    if (!isRetryable) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      const { access_token } = await refreshRequest();

      useAuthStore.getState().setToken(access_token);

      originalRequest.headers.Authorization = `Bearer ${access_token}`;

      return api(originalRequest);
    } catch (err) {
      useAuthStore.getState().logout();
      return Promise.reject(err);
    }
  },
);

export default api;
