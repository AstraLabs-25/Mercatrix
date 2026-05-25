import { apiClient } from './axios';

export const authApi = {
  me: async () => {
    const { data } = await apiClient.get('/auth/me');
    return data.user;
  },
  logout: async () => {
    await apiClient.post('/auth/logout');
  }
};
