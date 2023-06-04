import { API_BASE_URL } from "../environment";
import axios from "axios";
import { axiosInstance } from "../config/https";
export const getRequest = (
  endpoint,
  params = {},
  header = {
    "Content-Type": "application/json",
  }
) => {
  const url = `${API_BASE_URL}/${endpoint}`;

  return axiosInstance.get(url, {
    params: {
      ...params,
    },
    headers: { ...header },
  });
};
