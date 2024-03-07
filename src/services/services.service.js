import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ServiceService {
  
  async getServices() {
    try {
      const services = await prisma.servicios.findMany();
      return services;
    } catch (error) {
      throw new Error('Error fetching services: ' + error.message);
    }
  }

  async createService(serviceData) {
    try {
      const service = await prisma.servicios.create({
        data: {
          ...serviceData,
          servicios_tipos_servicios_tipos_vehiculos: {
            create: serviceData.servicios_tipos_servicios_tipos_vehiculos,
          },
        },
        include: {
          servicios_tipos_servicios_tipos_vehiculos: true,
        },
      });

      return service;
    } catch (error) {
      console.error('Error creating a service:', error);
      throw new Error('Error creating a service: ' + error.message);
    }
  }

  async getServiceById(serviceId) {
    try {
      const service = await prisma.servicios.findUnique({
        where: {
          id: serviceId,
        },
      });
      return service;
    } catch (error) {
      throw new Error('Error fetching a service by ID: ' + error.message);
    }
  }

  async updateService(serviceId, serviceData) {
    try {
      const updatedService = await prisma.servicios.update({
        where: {
          id: serviceId,
        },
        data: serviceData,
      });
      return updatedService;
    } catch (error) {
      throw new Error('Error updating a service: ' + error.message);
    }
  }

  async deleteService(serviceId) {
    try {
      const deletedService = await prisma.servicios.delete({
        where: {
          id: serviceId,
        },
      });
      return deletedService;
    } catch (error) {
      throw new Error('Error deleting a service: ' + error.message);
    }
  }

  async getServiceTypesByVehicle(tipoVehiculoId) {
    try {
      const tiposVehiculo = await prisma.modelos.findUnique({
        where: {
          id: tipoVehiculoId,
        },
        include: {
          tipos_vehiculos: {
            include: {
              tipos_servicios_tipos_vehiculos: {
                include: {
                  tipos_servicios: true,
                },
              },
            },
          },
        },
      });
  
      if (!tiposVehiculo) {
        throw new Error(`Tipo de vehículo with ID ${tipoVehiculoId} not found`);
      }
  
      const tiposServiciosTiposVehiculos = tiposVehiculo.tipos_vehiculos?.tipos_servicios_tipos_vehiculos || [];
      const result = tiposServiciosTiposVehiculos.flatMap((entry) => entry.tipos_servicios);
  
      return result;
    } catch (error) {
      console.error('Error fetching service types by vehicle:', error);
      throw new Error('Error fetching service types by vehicle: ' + error.message);
    }
  };
}

export default ServiceService;