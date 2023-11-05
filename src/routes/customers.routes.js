import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getCustomers,getCustomer,createCustomer,updateCustomer,deleteCustomer } from '../controllers/customers.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { customerSchema } from '../schemas/customer.schema.js';

const router = Router();

router.get('/customers', authRequired, getCustomers);
router.get('/customers/:id', authRequired, getCustomer);
router.post('/customers', validateSchema(customerSchema), authRequired, createCustomer);
router.delete('/customers/:id', authRequired, deleteCustomer);
router.put('/customers/:id', validateSchema(customerSchema), authRequired, updateCustomer);

export default router