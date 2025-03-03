import axios from "axios";

export default axios.create({
  baseURL: "https://chat-app-dun-three.vercel.app/api",
  withCredentials: true,
});
