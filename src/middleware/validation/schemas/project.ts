import Joi from 'joi';
import { IProject } from '../../../models/project';

const ProjectSchema = {
  create: Joi.object<IProject>({
    title: Joi.string().required(),
    description: Joi.string(),
    image: Joi.string(),
    link: Joi.string(),
    github: Joi.string(),
    technologies: Joi.array().items(Joi.string()),
  }),
};

export default ProjectSchema;
