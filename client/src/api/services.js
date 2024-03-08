import axios from "./axios";

export const getServicesRequest = (startDate, endDate) => {
  const params = {
    startDate: startDate,
    endDate: endDate
  };

  return axios.get('/services', { params });
};

export const getServiceRequest = (id) => axios.get(`/services/${id}`);
export const createServiceRequest = async (service) =>
  axios.post(`/services`, service);
export const updateServiceRequest = (id, service) =>
  axios.put(`/services/${id}`, service);
export const deleteServiceRequest = (id) => axios.delete(`/services/${id}`);