import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export const validateBody = (dto: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log(" req.body====", req.body)
    console.log("dto===",dto)
    const output = plainToInstance(dto, req.body);
    const errors = await validate(output);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    next();
  };
};
