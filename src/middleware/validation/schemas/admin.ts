import Joi from 'joi';
import { IAdmin } from '../../../models/admin';

const AdminSchema = {
  create: Joi.object<IAdmin>({
    username: Joi.string().required(),
    email: Joi.string().required().email(),
    full_name: Joi.string().required().max(50),
    password: Joi.string()
      .required()
      .min(8)
      .pattern(
        new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])')
      ),
  }),
};

export default AdminSchema;
