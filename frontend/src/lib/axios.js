import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://chatapp-eh7e.onrender.com/api",
  withCredentials: true, 
  timeout: 60000, 
});

export default axiosInstance;