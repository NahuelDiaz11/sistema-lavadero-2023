import CustomerService from "../services/customers.service.js";
const customerService = new CustomerService();

export const getCustomers = async (req, res) => {
  try {
    const customer = await customerService.getCustomers();
    res.json(customer);
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({ error: "Error fetching customers" });
  }
};

export const createCustomer = async (req, res) => {
  const customerData = req.body;
  try {
    const newCustomer = await customerService.createCustomer(customerData);
    res.json(newCustomer);
  } catch (error) {
    console.log("el error es : " + error);
    res.status(500).json({ error: "Error creating a customer" });
  }
};

export const getCustomer = async (req, res) => {
  const customerId = parseInt(req.params.id);
  try {
    const customer = await customerService.getCustomerById(customerId);
    return res.json(customer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Customer not found" });
  }
};

export const updateCustomer = async (req, res) => {
  const customerId = parseInt(req.params.id);
  const customerData = req.body;
  try {
    await customerService.updateCustomer(customerId, customerData);

    res.status(200).json({ message: "Customer correctly updated" });
  } catch (error) {
    res.status(500).json({ error: "Customer not found" });
  }
};

export const deleteCustomer = async (req, res) => {
  const customerId = parseInt(req.params.id);

  try {
    await customerService.deleteCustomer(customerId);
    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Customer not found" });
  }
};
