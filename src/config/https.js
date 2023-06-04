import axios from "axios";
import { API_BASE_URL } from "../environment";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = "fdsfds sdfdsfd sfdd sdfsdfsfd";
    if (token) {
      config.headers.accessToken = token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
