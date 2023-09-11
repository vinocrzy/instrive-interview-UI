import axios from "axios";
// import { store } from '../store/store';

const baseURL = import.meta.env.VITE_APP_API_KEY || `http://localhost:5050`;

export const getToken = () => {
  const tokenString = localStorage.getItem("Token");
  // const tokenDetails = JSON.parse(tokenDetailsString);

  // console.log({ tokenString });

  return tokenString;
};

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use((config) => {
  // const state = store?.getState();
  const token = getToken();

  // console.log({ token });

  config.headers = config.headers || {};
  if (token && token !== "") {
    config.headers["Authorization"] = `${token}`;
  }
  return config;
});

export default axiosInstance;
