import axios from "axios";

const API = "http://localhost:4000/api";

export const registerRequest = async (user) =>
  axios.post(`/auth/register`, user);

export const loginRequest = user => axios.post(`${API}/register`, user);

export const verifyTokenRequest = async () => axios.get(`/auth/verify`);