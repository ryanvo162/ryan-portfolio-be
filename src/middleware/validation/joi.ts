import { NextFunction, Request, Response } from 'express';
import { isError, ObjectSchema } from 'joi';

export const ValidateJoiBody = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);

      next();
    } catch (error) {
      console.error(error);
      if (isError(error))
        return res.status(422).json({ message: error.message });
    }
  };
};

export const ValidateJoiParam = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.params);

      next();
    } catch (error) {
      console.error(error);
      if (isError(error))
        return res.status(422).json({ message: error.message });
    }
  };
};
