import { PrismaClient } from "@prisma/client";
import { custom } from "zod";

const prisma = new PrismaClient();

BigInt.prototype.toJSON = function() {
  return this.toString();
};
class CustomerService {
  async getCustomers() {
    try {
      const customers = await prisma.clientes.findMany();
      return customers;
    } catch (error) {
      throw new Error('Error fetching customers: ' + error.message);
    }
  }

  async createCustomer(customerData) {
    try {
      customerData.id_localidad = parseInt(customerData.id_localidad, 10);
      const newCustomer = await prisma.clientes.create({
        data: customerData,
      });

      return newCustomer;
    } catch (error) {
      throw new Error('Error creating a customer: ' + error.message);
    }
  }

  async getCustomerById(customerId) {
    try {
      const customer = await prisma.clientes.findUnique({
        where: {
          id: customerId,
        },
      });
      return customer;
    } catch (error) {
      throw new Error('Error fetching a customer by ID: ' + error.message);
    }
  }

  async updateCustomer(customerId, customerData) {
    try {
      const updatedCustomer = await prisma.clientes.update({
        where: {
          id: customerId,
        },
        data: customerData,
      });
      return updatedCustomer;
    } catch (error) {
      throw new Error('Error updating a customer: ' + error.message);
    }
  }

  async deleteCustomer(customerId) {
    try {
      const deletedCustomer = await prisma.clientes.delete({
        where: {
          id: customerId,
        },
      });
      return deletedCustomer;
    } catch (error) {
      throw new Error('Error deleting a customer: ' + error.message);
    }
  }
}

export default CustomerService;