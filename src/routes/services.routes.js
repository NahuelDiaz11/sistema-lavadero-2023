import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getServices, getService,createService, updateService, deleteService, getServiceTypesByVehicle } from '../controllers/services.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { serviceSchema } from '../schemas/service.schema.js';

const router = Router();

router.get('/services', authRequired, getServices);
router.get('/services/:id', authRequired, getService);
router.post('/services', validateSchema(serviceSchema), authRequired, createService);
router.delete('/services/:id', authRequired, deleteService);
router.put('/services/:id', validateSchema(serviceSchema), authRequired, updateService);
router.get('/services-by-vehicle/:id', authRequired, getServiceTypesByVehicle);

export default router