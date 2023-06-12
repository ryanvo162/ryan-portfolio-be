import { Router } from 'express';

import { getProjects, getProject, createProject } from '../controllers/project';
import {
  ValidateJoiBody,
  ValidateJoiParam,
} from '../middleware/validation/joi';
import { ProjectSchema } from '../middleware/validation/schemas';
import ParamsSchema from '../middleware/validation/schemas/params';

const router = Router();

router.get('/', getProjects);
router.get('/:id', ValidateJoiParam(ParamsSchema.common), getProject);
router.post('/', ValidateJoiBody(ProjectSchema.create), createProject);

export default router;
