import axios from 'axios';
const API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;
const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

const supabaseUrl = 'https://kflcipnaobvmiowsqagw.supabase.co';

const axiosInstance = axios.create({
  baseURL: BASE_URL + '/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
});

const errorHandle = (error) => {
  const errorMessage = error.response?.data?.message || 'Something went wrong';
  return Promise.reject(new Error(errorMessage));
};

const callApi = {
  // 🔹Authentication API route management
  CreateNewResume: async (formData) => {
    return axiosInstance
      .post('/resume', formData)
      .then((res) => res.data)
      .catch(errorHandle);
  },

  GetAllResumes: async () => {
    return axiosInstance
      .get('/resume')
      .then((res) => res.data)
      .catch(errorHandle);
  },

  GetResumeDetail: async (resumeId) => {
    return axiosInstance
      .get(`/resume/${resumeId}`)
      .then((res) => res.data)
      .catch(errorHandle);
  },

  UpdateResume: async (resumeId, formData) => {
    return axiosInstance
      .put(`/resume/${resumeId}`, formData)
      .then((res) => res.data)
      .catch(errorHandle);
  },

  DeleteResume: async (resumeId, formData) => {
    return axiosInstance
      .delete(`/resume/${resumeId}`, formData)
      .then((res) => res.data)
      .catch(errorHandle);
  },
};

export default callApi;
