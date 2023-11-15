import axios from "./axios";

export const getServicesRequest = () => axios.get(`/services`);

export const getServiceRequest = (id) => axios.get(`/services/${id}`);
export const createServiceRequest = async (service) =>
  axios.post(`/services`, service);
export const updateServiceRequest = (id, service) =>
  axios.put(`/services/${id}`, service);
export const deleteServiceRequest = (id) => axios.delete(`/services/${id}`);