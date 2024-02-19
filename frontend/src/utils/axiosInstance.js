import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: { "Content-Type": "application/json" },
});

export const axiosRestInstance = axios.create({
  baseURL: process.env.REST_API,
  headers: { "Content-Type": "application/json" },
});
