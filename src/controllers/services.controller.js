import ServiceService from "../services/services.service.js";
const serviceService = new ServiceService();

export const getServices = async (req, res) => {
  try {
    const services = await serviceService.getServices();
    
    res.json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ error: "Error fetching services" });
  }
};

export const createService = async (req, res) => {
  const serviceData = req.body;
  try {
    const newService = await serviceService.createService(serviceData);
    res.json(newService);
  } catch (error) {
    res.status(500).json({ error: "Error creating a service" });
  }
};

export const getService = async (req, res) => {
  const serviceId = parseInt(req.params.id);
  try {
    const service = await serviceService.getServiceById(serviceId);
    return res.json(service);
  } catch (error) {
    res.status(500).json({ error: "Service not found" });
  }
};

export const updateService = async (req, res) => {
  const serviceId = parseInt(req.params.id);
  const serviceData = req.body;
  try {
    await serviceService.updateService(serviceId, serviceData);

    res.status(200).json({ message: "Service correctly updated" });
  } catch (error) {
    res.status(500).json({ error: "Service not found" });
  }
};

export const deleteService = async (req, res) => {
  const serviceId = parseInt(req.params.id);

  try {
    await serviceService.deleteService(serviceId);
    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Service not found" });
  }
};

export const getServiceTypesByVehicle = async (req, res) => {
  const tipoVehiculoId = parseInt(req.params.id);

  try {
    const serviceTypes = await serviceService.getServiceTypesByVehicle(tipoVehiculoId);
    
    if (!serviceTypes) {
      res.status(404).json({ error: "Service types not found for the given vehicle ID" });
    } else {
      res.json(serviceTypes);
    }
  } catch (error) {
    console.error("Error fetching service types by vehicle:", error);
    res.status(500).json({ error: "Error fetching service types by vehicle" });
  }
};