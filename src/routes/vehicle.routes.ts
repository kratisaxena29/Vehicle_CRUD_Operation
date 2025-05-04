import { Router } from 'express';
import * as controller from '../controllers/vehicle.controller';
// import { validateBody } from '../middlewares/validation';
import {  vehicleSchema } from '../validators/vehicle.validator';
import { asyncHandler } from '../middlewares/asyncHandler';
import { validateYupSchema } from '../validators/yupValidator';

const router = Router();

router.post('/',asyncHandler( validateYupSchema(vehicleSchema)), controller.addVehicle);
router.put('/:id', asyncHandler(validateYupSchema(vehicleSchema)), controller.updateVehicle);
router.delete('/:id', controller.deleteVehicle);
router.get('/', controller.getAllVehicles);
router.get('/:id', controller.getSingleVehicle);

export default router;