import { isValidObjectId } from 'mongoose';
import Project, { IProject } from '../../models/project';
import { Request, Response } from 'express';

const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // check id is valid
    const isValid = isValidObjectId(id);
  
    const project = await Project.findById(id);
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createProject = async (req: Request, res: Response) => {
  try {
    const props: IProject = req.body;

    //check title is unique
    const existingProject = await Project.findOne({ title: props.title });
    if (existingProject)
      return res.status(409).json({ message: 'Project already exists' });

    const project = await Project.create(props);
    res.status(201).json({ project });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// const updateProject = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;

export { getProjects, getProject, createProject };
