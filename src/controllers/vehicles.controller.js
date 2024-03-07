import VehicleService from "../services/vehicle.service.js";
const vehicleService = new VehicleService();

export const getVehicles = async (req, res) => {
  try {
    const vehicles = await vehicleService.getVehicles();
    res.json(vehicles);
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    res.status(500).json({ error: "Error fetching vehicles" });
  }
};

export const createVehicle = async (req, res) => {
  const vehicleData = req.body;
  try {
    const newVehicle = await vehicleService.createVehicle(vehicleData);
    res.json(newVehicle);
  } catch (error) {
    console.log("el error es : " + error);
  }
};

export const getVehicle = async (req, res) => {
  const vehicleId = parseInt(req.params.id);
  try {
    const vehicle = await vehicleService.getVehicleById(vehicleId);
    return res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: "Vehicle not found" });
  }
};

export const updateVehicle = async (req, res) => {
  const vehicleId = parseInt(req.params.id);
  const vehicleData = req.body;
  try {
    await vehicleService.updateVehicle(vehicleId, vehicleData);

    res.status(200).json({ message: "Vehicle correctly updated" });
  } catch (error) {
    res.status(500).json({ error: "Vehicle not found" });
  }
};

export const deleteVehicle = async (req, res) => {
  const vehicleId = parseInt(req.params.id);

  try {
    await vehicleService.deleteVehicle(vehicleId);
    res.json({ message: "Vehicle deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Vehicle not found" });
  }
};

export const getModel = async (req, res) => {
  const modelId = parseInt(req.params.id);
  try {
    const model = await vehicleService.getModelById(modelId);
    return res.json(model);
  } catch (error) {
    res.status(500).json({ error: "Model not found" });
  }
};
