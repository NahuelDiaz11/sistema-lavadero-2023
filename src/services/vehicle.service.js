import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class VehicleService {
  
  async getVehicles() {
    try {
      const vehicles = await prisma.vehiculos.findMany({
        include: {
          modelos: {
            include: {
              tipos_vehiculos: true,
            },
          }
        },
      });
      return vehicles;
    } catch (error) {
      throw new Error('Error fetching vehicles: ' + error.message);
    }
  }

  async createVehicle(vehicleData) {
    try {
      const newVehicle = await prisma.vehiculos.create({
        data: vehicleData,
      });
      return newVehicle;
    } catch (error) {
      throw new Error('Error creating a vehicle: ' + error.message);
    }
  }

  async getVehicleById(vehicleId) {
    try {
      const vehicle = await prisma.vehiculos.findUnique({
        where: {
          id: vehicleId,
        },
      });
      return vehicle;
    } catch (error) {
      throw new Error('Error fetching a vehicle by ID: ' + error.message);
    }
  }

  async updateVehicle(vehicleId, vehicleData) {
    try {
      const updatedVehicle = await prisma.vehiculos.update({
        where: {
          id: vehicleId,
        },
        data: vehicleData,
      });
      return updatedVehicle;
    } catch (error) {
      throw new Error('Error updating a vehicle: ' + error.message);
    }
  }

  async deleteVehicle(vehicleId) {
    try {
      const deletedVehicle = await prisma.vehiculos.delete({
        where: {
          id: vehicleId,
        },
      });
      return deletedVehicle;
    } catch (error) {
      throw new Error('Error deleting a vehicle: ' + error.message);
    }
  }
}

export default VehicleService;