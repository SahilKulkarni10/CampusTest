


import axios from "axios";

const apiRequest = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? "http://localhost:8800/api"
      : "https://campus-test-zz76.vercel.app",
  withCredentials: true,
});

export default apiRequest;
