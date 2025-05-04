import { Request, Response } from 'express';
import * as vehicleService from '../services/vehicle.service';

export const addVehicle = async (req: Request, res: Response) => {
  const vehicle = req.body;
  const result = await vehicleService.createVehicle(vehicle);
  res.status(201).json(result);
};

export const updateVehicle = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body;
  const result = await vehicleService.updateVehicle(id, data);
  res.json(result);
};

export const deleteVehicle = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await vehicleService.deleteVehicle(id);
  res.json({ message: 'Vehicle deleted successfully' });
};

export const getAllVehicles = async (_: Request, res: Response) => {
  const vehicles = await vehicleService.getAllVehicles();
  res.json(vehicles);
};

export const getSingleVehicle = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const vehicle = await vehicleService.getVehicleById(id);
  res.json(vehicle);
};