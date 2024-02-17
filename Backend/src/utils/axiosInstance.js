const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: { "Content-Type": "application/json" },
});

module.exports = axiosInstance;
