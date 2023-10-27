import ServiceService from "../services/services.service.js";
const serviceService = new ServiceService();

export const getVehicles = async (req, res) => {
  try {
    const vehicles = await serviceService.getVehicles();
    res.json(vehicles);
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    res.status(500).json({ error: "Error fetching vehicles" });
  }
};

export const createVehicle = async (req, res) => {
  const vehicleData = req.body;
  try {
    const newVehicle = await serviceService.createVehicle(vehicleData);
    res.json(newVehicle);
  } catch (error) {
    res.status(500).json({ error: "Error creating a vehicle" });
  }
};

export const getVehicle = async (req, res) => {
  const vehicleId = parseInt(req.params.id);
  try {
    const vehicle = await serviceService.getVehicleById(vehicleId);
    return res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: "Vehicle not found" });
  }
};

export const updateVehicle = async (req, res) => {
  const vehicleId = parseInt(req.params.id);
  const vehicleData = req.body;
  try {
    await serviceService.updateVehicle(vehicleId, vehicleData);

    res.status(200).json({ message: "Vehicle correctly updated" });
  } catch (error) {
    res.status(500).json({ error: "Vehicle not found" });
  }
};

export const deleteVehicle = async (req, res) => {
  const vehicleId = parseInt(req.params.id);

  try {
    await serviceService.deleteVehicle(vehicleId);
    res.json({ message: "Vehicle deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Vehicle not found" });
  }
};
