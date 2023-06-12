import { Document, Schema, model } from 'mongoose';

export type IProject = {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  github?: string;
  technologies?: string[];
};

export type IProjectDocument = Document & IProject;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  image: String,
  link: String,
  github: String,
  technologies: [String],
}, { timestamps: true });

const Project = model<IProjectDocument>('Project', projectSchema);

export default Project;
