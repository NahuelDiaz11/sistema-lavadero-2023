import axios from "axios";

const API = "http://localhost:3000/api";

export const registerRequest = async (user) =>
  axios.post(`/auth/register`, user);

export const loginRequest = user => axios.post(`${API}/login`, user);

export const verifyTokenRequest = async () => axios.get(`/auth/verify`);