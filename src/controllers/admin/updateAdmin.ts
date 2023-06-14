import { Request, Response } from 'express';
import Admin, { IAdmin } from '../../models/admin';
import bcrypt from 'bcrypt';

const updateAdmin = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const props: IAdmin = req.body;
    const admin = await Admin.findById(id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(props.password, salt);

    await admin.updateOne({ ...props, password: hashedPassword });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
};

export default updateAdmin;
