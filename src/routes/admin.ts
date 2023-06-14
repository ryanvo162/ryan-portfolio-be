import { Router } from 'express';

import {
  login,
  getAdmins,
  getAdmin,
  createAdmin,
  updateAdmin,
} from '../controllers/admin';
import { ValidateJoiBody } from '../middleware/validation/joi';
import { AdminSchema } from '../middleware/validation/schemas';
import { validateToken } from '../middleware/token';

const router = Router();
const validateCreateAdmin = [
  validateToken,
  ValidateJoiBody(AdminSchema.create),
];

router.post('/login', login);
router.get('/', getAdmins);
router.get('/:id', getAdmin);
router.post('/create', validateCreateAdmin, createAdmin);
router.put('/update', updateAdmin);

export default router;
