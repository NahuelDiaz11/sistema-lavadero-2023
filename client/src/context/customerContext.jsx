import { createContext, useContext, useState } from "react";
import { createCustomerRequest } from "../api/customers";

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

  const createCustomer = async (customer) => {
    const res = await createCustomerRequest(customer);
    console.log(res);
  };
  return (
    <CustomerContext.Provider
      value={{
        customers,
        createCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
