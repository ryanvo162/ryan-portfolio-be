import { Request, Response } from 'express';
import Project, { IProject } from '../../models/project';

const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createProject = async (req: Request, res: Response) => {
  try {
    const props: IProject = req.body;
    const existingProject = await Project.findOne({ title: props.title });
    if (existingProject)
      return res.status(409).json({ message: 'Project already exists' });

    const project = await Project.create(props);
    res.status(201).json({ project });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export { createProject, getProject, getProjects };
