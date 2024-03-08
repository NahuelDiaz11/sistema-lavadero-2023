import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ServiceService {
  
  async getServices(startDate, endDate) {
    try {
      const services = await prisma.servicios.findMany({
        where: {
          fecha: {
            gte: new Date(startDate), // Filtrar los servicios cuya fecha sea mayor o igual a startDate
            lte: new Date(endDate)    // Filtrar los servicios cuya fecha sea menor o igual a endDate
          }
        },
        include: {
          clientes: true // Incluir los datos del cliente relacionado
        }
      });
      return services;
    } catch (error) {
      throw new Error('Error fetching services: ' + error.message);
    }
  }
  

  async createService(serviceData) {
    // Agrega la hora por defecto a la fecha
  
    // Asume que serviceData contiene un campo id_tipo_servicio
    const { id_tipo_servicio, ...rest } = serviceData;
  
    // Obtiene el último id utilizado
    const lastEntry = await prisma.servicios_tipos_servicios_tipos_vehiculos.findFirst({
      orderBy: {
        id: 'desc',
      },
    });
  
    // Incrementa el id
    const incremento = lastEntry ? lastEntry.id + 1 : 1;
  
    // Intenta crear el servicio
    try {
      const newService = await prisma.servicios.create({
        data: {
          ...rest,
          servicios_tipos_servicios_tipos_vehiculos: {
            create: {
              id: incremento,
              id_tipo_servicio_vehiculo: id_tipo_servicio,
              // Aquí puedes agregar otros campos necesarios
            },
          },
        },
        include: {
          servicios_tipos_servicios_tipos_vehiculos: true,
        },
      });
      return newService;
    } catch (error) {
      console.error("Error creating a service:", error);
      throw error;
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