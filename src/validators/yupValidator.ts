import { Request, Response, NextFunction } from 'express';
import { AnySchema } from 'yup';

export const validateYupSchema = (schema: AnySchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = await schema.validate(req.body, { abortEarly: false, stripUnknown: true });
      next();
    } catch (error: any) {
      return res.status(400).json({
        message: 'Validation failed',
        error:error.inner?.[0]?.message
        // errors: error.inner.map((err: any) => ({
        //   path: err.path,
        //   message: err.message,
        // })),
      });
    }
  };
};
