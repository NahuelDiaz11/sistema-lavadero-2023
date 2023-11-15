import axios from "./axios";

export const getVehiclesRequest = () => axios.get(`/vehicles`);

export const getVehicleRequest = (id) => axios.get(`/vehicles/${id}`);
export const createVehicleRequest = async (vehicle) =>
  axios.post(`/vehicles`, vehicle);
export const updateVehicleRequest = (id, vehicle) =>
  axios.put(`/vehicles/${id}`, vehicle);
export const deleteVehicleRequest = (id) => axios.delete(`/vehicles/${id}`);