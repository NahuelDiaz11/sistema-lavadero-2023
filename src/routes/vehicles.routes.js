import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getVehicles,getVehicle,createVehicle,updateVehicle,deleteVehicle } from '../controllers/vehicles.controller.js';

const router = Router();

router.get('/vehicles', authRequired, getVehicles);
router.get('/vehicles/:id', authRequired, getVehicle);
router.post('/vehicles', authRequired, createVehicle);
router.delete('/vehicles/:id', authRequired, deleteVehicle);
router.put('/vehicles/:id', authRequired, updateVehicle);

export default router