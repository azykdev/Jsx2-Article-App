import axios from "axios";
import { getItem } from "../helpers/persistance-storage";

axios.defaults.baseURL = "http://localhost:3000/api";

// axios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

axios.interceptors.request.use((config) => {
  const token = getItem("token");
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
});

export default axios;
