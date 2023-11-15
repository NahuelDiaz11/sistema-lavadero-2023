import { createContext, useContext, useState } from "react";
import { createCustomerRequest, getCustomersRequest, deleteCustomerRequest, getCustomerRequest, updateCustomerRequest } from "../api/customers";

const CustomerContext = createContext();

export const useCustomers = () => {
  const context = useContext(CustomerContext);

  if (!context) {
    throw new Error(
      "useCustomers debe utilizarse dentro de un CustomerProvider"
    );
  }
  return context;
};

export function CustomerProvider({ children }) {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async (customer) => {
   try {
    const res = await getCustomersRequest();
    setCustomers(res.data)
   } catch (error) {
    console.log(error);
   }
    
  };

  const createCustomer = async (customer) => {
    const res = await createCustomerRequest(customer);
    console.log(res);
  };

  const deleteCustomer = async (id) => {
    try {
      const res = await deleteCustomerRequest(id) 
      if(res.status === 200) setCustomers(customers.filter((customer) => customer.id !== id));
  
    } catch (error) {
      console.log(error);
    }
  };

  const getCustomer = async (id) => {
   try {
    const res = await getCustomerRequest(id);
    return res.data
   } catch (error) {
     console.log(error);
   }
  };

  const updateCustomer = async (id, customer) => {
    try {
      await updateCustomerRequest(id, customer);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomerContext.Provider
      value={{
        customers,
        createCustomer,
        getCustomers,
        deleteCustomer,
        getCustomer,
        updateCustomer
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
