import { createContext, useContext, useState } from "react";
import { createServiceRequest, getServicesRequest, deleteServiceRequest, getServiceRequest, updateServiceRequest } from "../api/services";

const ServiceContext = createContext();

export const useServices = () => {
  const context = useContext(ServiceContext);

  if (!context) {
    throw new Error(
      "useService debe utilizarse dentro de un ServiceProvider"
    );
  }
  return context;
};

export function ServiceProvider({ children }) {
  const [services, setServices] = useState([]);

  const getServices = async (service) => {
   try {
    const res = await getServicesRequest();
    setServices(res.data)
   } catch (error) {
    console.log(error);
   }
    
  };

  const createService = async (service) => {
    const res = await createServiceRequest(service);
    console.log(res);
  };

  const deleteService = async (id) => {
    try {
      const res = await deleteServiceRequest(id) 
      if(res.status === 200) setServices(services.filter((service) => service.id !== id));
  
    } catch (error) {
      console.log(error);
    }
  };

  const getService = async (id) => {
   try {
    const res = await getserviceRequest(id);
    return res.data
   } catch (error) {
     console.log(error);
   }
  };

  const updateService = async (id, service) => {
    try {
      await updateServiceRequest(id, service);
    } catch (error) {
      console.log(error);
    }
  };

  const getServicesByVehicle = async (vehicleId) => {
    try {
      const vehicleResponse = await axios.get(
        `http://localhost:3000/api/vehicles/${vehicleId}`
      );
      const vehicleModel = vehicleResponse.data;

      if (!vehicleModel) return [];

      const servicesResponse = await axios.get(
        `http://localhost:3000/api/services-by-vehicle/${vehicleModel.tipo_vehiculo}`
      );

      return servicesResponse.data;
    } catch (error) {
      console.error('Error fetching services by vehicle:', error);
      return [];
    }
  };

  return (
    <ServiceContext.Provider
      value={{
        services,
        createService,
        getServices,
        deleteService,
        getService,
        updateService,
        getServicesByVehicle
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}