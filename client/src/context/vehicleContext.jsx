import { createContext, useContext, useState } from "react";
import { createVehicleRequest, getVehiclesRequest, deleteVehicleRequest, getVehicleRequest, updateVehicleRequest } from "../api/vehicles";

const VehicleContext = createContext();

export const useVehicles = () => {
  const context = useContext(VehicleContext);

  if (!context) {
    throw new Error(
      "useVehicle debe utilizarse dentro de un VehicleProvider"
    );
  }
  return context;
};

export function VehicleProvider({ children }) {
  const [vehicles, setVehicles] = useState([]);

  const getVehicles = async (vehicle) => {
   try {
    const res = await getVehiclesRequest();
    setVehicles(res.data)
   } catch (error) {
    console.log(error);
   }
    
  };

  const createVehicle = async (vehicle) => {
    const res = await createVehicleRequest(vehicle);
    console.log(res);
  };

  const deleteVehicle = async (id) => {
    try {
      const res = await deleteVehicleRequest(id) 
      if(res.status === 200) setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  
    } catch (error) {
      console.log(error);
    }
  };

  const getVehicle = async (id) => {
   try {
    const res = await getVehicleRequest(id);
    return res.data
   } catch (error) {
     console.log(error);
   }
  };

  const updateVehicle = async (id, vehicle) => {
    try {
      await updateVehicleRequest(id, vehicle);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VehicleContext.Provider
      value={{
        vehicles,
        createVehicle,
        getVehicles,
        deleteVehicle,
        getVehicle,
        updateVehicle
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
}
