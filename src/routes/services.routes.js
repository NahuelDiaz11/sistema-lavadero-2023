import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getServices,getService,createService,updateService,deleteService } from '../controllers/services.controller.js';

const router = Router();

router.get('/services', authRequired, getServices);
router.get('/services/:id', authRequired, getService);
router.post('/services', authRequired, createService);
router.delete('/services/:id', authRequired, deleteService);
router.put('/services/:id', authRequired, updateService);

export default router