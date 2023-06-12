import Joi from 'joi';
import { isValidObjectId } from 'mongoose';

const ParamsSchema = {
  common: Joi.object({
    id: Joi.required().custom((value, helpers) => {
      if (!isValidObjectId(value)) return helpers.error('any.invalid');
      return true;
    }),
  }),
};

export default ParamsSchema;
