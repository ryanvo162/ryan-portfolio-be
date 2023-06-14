import { Request, Response } from 'express';
import Admin from '../../models/admin';
import { adminSerializer } from '../../serializers/admin';

const getAdmin = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    const result = adminSerializer(admin);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default getAdmin;
