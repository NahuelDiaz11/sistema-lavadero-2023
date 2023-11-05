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
      const newService = await prisma.servicios.create({
        data: serviceData,
      });
      return newService;
    } catch (error) {
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
}

export default ServiceService;