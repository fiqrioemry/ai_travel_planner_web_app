import axios from 'axios';
import { authInstance, publicInstance } from '.';
const errorHandle = (error) => {
  const errorMessage = error.response?.data?.message;
  return Promise.reject(new Error(errorMessage));
};

const callApi = {
  // User Authentication management
  login: async (formData) => {
    return axios
      .post('/auth/login', formData)
      .then((res) => res.data)
      .catch(errorHandle);
  },

  getUserProfile: async (token) => {
    return axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${token}`,
        {
          headers: {
            Authorization: `Bearer ${token?.access_token}`,
            Accept: 'Application/json',
          },
        },
      )
      .then((res) => res.data)
      .catch(errorHandle);
  },

  logout: async () => {
    return authInstance
      .post('/auth/logout')
      .then((res) => res.data)
      .catch(errorHandle);
  },

  register: async (formData) => {
    return publicInstance
      .post('/auth/register', formData)
      .then((res) => res.data)
      .catch(errorHandle);
  },

  refreshToken: async () => {
    return publicInstance
      .post('/auth/refresh')
      .then((res) => res.data)
      .catch(errorHandle);
  },

  authCheck: async () => {
    return authInstance
      .get('/auth/me')
      .then((res) => res.data)
      .catch(errorHandle);
  },
};

export default callApi;
