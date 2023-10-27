import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getCustomers,getCustomer,createCustomer,updateCustomer,deleteCustomer } from '../controllers/customers.controller.js';

const router = Router();

router.get('/customers', authRequired, getCustomers);
router.get('/customers/:id', authRequired, getCustomer);
router.post('/customers', authRequired, createCustomer);
router.delete('/customers/:id', authRequired, deleteCustomer);
router.put('/customers/:id', authRequired, updateCustomer);

export default router