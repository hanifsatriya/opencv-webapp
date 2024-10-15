import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://dummyjson.com",
});

apiClient.interceptors.request.use((request) => {
  return request;
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);
