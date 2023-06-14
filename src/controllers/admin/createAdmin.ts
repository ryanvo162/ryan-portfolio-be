import { Request, Response } from 'express';
import Admin from '../../models/admin';
import bcrypt from 'bcrypt';

const createAdmin = async (req: Request, res: Response) => {
  try {
    console.log('createAdmin');
    const props = req.body;
    const existingAdmin = await Admin.find({
      $or: [{ username: props.username }, { email: props.email }],
    });
    if (existingAdmin.length > 0)
      return res.status(409).json({ message: 'Admin already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(props.password, salt);

    await Admin.create({ ...props, password: hashedPassword });
    res.sendStatus(201);
  } catch (error) {
    // res.sendStatus(500);
    res.status(500).json({ error });
  }
};

export default createAdmin;
