import { Document, Schema, model } from 'mongoose';

export type IAdmin = {
  id?: string;
  email: string;
  full_name: string;
  username: string;
  password: string;
  created_at?: string
  updated_at?: string
};

export type IAdminDocument = Document & IAdmin;

const adminSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    full_name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Admin = model<IAdminDocument>('Admin', adminSchema);

export default Admin;
