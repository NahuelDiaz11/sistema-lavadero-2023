import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getVehicles,getVehicle,createVehicle,updateVehicle,deleteVehicle } from '../controllers/vehicles.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { vehicleSchema } from '../schemas/vehicle.schema.js';

const router = Router();

router.get('/vehicles', authRequired, getVehicles);
router.get('/vehicles/:id', authRequired, getVehicle);
router.post('/vehicles', validateSchema(vehicleSchema), authRequired, createVehicle);
router.delete('/vehicles/:id', authRequired, deleteVehicle);
router.put('/vehicles/:id',  validateSchema(vehicleSchema), authRequired, updateVehicle);

export default router