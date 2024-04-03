import { API_BASE_URL } from "../environment";
import axios from "axios";
import { axiosInstance } from "../config/https";

/**
 * Sends a GET request to the specified endpoint with optional parameters and headers.
 *
 * @param {string} endpoint - The endpoint to send the request to.
 * @param {Object} params - Optional parameters to include in the request URL.
 * @param {Object} header - Optional headers to include in the request.
 * @returns {Promise} - A Promise that resolves to the response data.
 */
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
