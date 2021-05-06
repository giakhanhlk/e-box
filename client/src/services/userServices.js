import axios from "axios";
import { API_ENDPOINT } from "../constants";
import apiHandler from "./apiHandler";

const login = (data) => {
  return apiHandler.post(`${API_ENDPOINT}/user/token`, data);
};

const logout = () => {
  localStorage.removeItem("user_token");
  window.location.reload();
};

const register = (data) => {
  return apiHandler.post(`${API_ENDPOINT}/user/signup`, data);
};

const getMyData = () => {
  const userToken = JSON.parse(localStorage.getItem("user_token") || "{}")
    .token;

  apiHandler.setHeader("Authorization", userToken || {});

  return apiHandler.get(`${API_ENDPOINT}/user/profile`);
};

export { login, logout, register, getMyData };
