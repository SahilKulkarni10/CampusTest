


// import axios from "axios";

// const apiRequest = axios.create({
//   baseURL:
//     window.location.hostname === "localhost"
//       ? "http://localhost:8800/api"
//       : "https://campus-test-zz76.vercel.app",
//   withCredentials: true,
// });

// export default apiRequest;


import axios from "axios";
import { io } from "socket.io-client";

// Determine the base URL for API requests
const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:8800/api"
    : "https://campus-test-zz76.vercel.app";

// Axios instance for API requests
const apiRequest = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Determine the URL for Socket.IO
const SOCKET_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:8800"
    : "https://campus-test-zz76.vercel.app";

// Socket.IO instance for real-time communication
const socket = io(SOCKET_URL, {
  withCredentials: true,
});

// Example: Register default socket event listeners
socket.on("connect", () => {
  console.log("Connected to Socket.IO server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from Socket.IO server");
});

export { apiRequest, socket };
