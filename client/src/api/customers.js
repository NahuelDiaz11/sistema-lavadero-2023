import axios from "./axios";

export const getCustomersRequest = () => axios.get(`/customers`);
export const createCustomerRequest = async (customer) => axios.post(`/customers`, customer);
export const updateCustomerRequest = (customer) =>
  axios.put(`/customer/${customer.id}`, customer);
export const deleteCustomerRequest = (customer) =>
  axios.delete(`/customer/${customer.id}`);
