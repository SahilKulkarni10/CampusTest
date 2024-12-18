// import axios from "axios";

// const apiRequest = axios.create({
//   baseURL: "http://localhost:8800/api",
//   withCredentials: true,
// });

// export default apiRequest;



import axios from "axios";

const apiRequest = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? "http://localhost:8800/api"
      : "https://campus-test-zz76.vercel.app",
  withCredentials: true,
});

export default apiRequest;
