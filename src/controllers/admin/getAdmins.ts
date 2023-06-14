import { Request, Response } from 'express';
import Admin from '../../models/admin';
import { adminShortSerializer } from '../../serializers/admin';

const getAdmins = async (req: Request, res: Response) => {
  try {
    const admins = await Admin.find()
    const result = admins.map((admin) => adminShortSerializer(admin));
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default getAdmins;
