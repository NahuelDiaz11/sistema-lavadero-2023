import axios from "./axios";

export const registerRequest = async (user) =>
  axios.post(`/register`, user);

export const login = user => axios.post(`/login`, user);

export const verifyTokenRequest = async () => axios.get(`/verify`);

//export const logoutRequest = user => axios.post(`/login`, user);
