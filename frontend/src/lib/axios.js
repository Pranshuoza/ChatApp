import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://chat-app-dun-three.vercel.app/api",
  withCredentials: true, 
  timeout: 60000, 
});

export default axiosInstance;