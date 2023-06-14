import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/token';
import Admin from '../../models/admin';
import moment from 'moment';

let refreshTokens: string[] = [];

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({
      $or: [{ username }, { email: username }],
    });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, admin.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const expiredDate = moment().add(1, 'days').toString();
    console.log('expiredDate', expiredDate);
    const accessToken = generateToken({ id: admin.id }, 1);
    console.log('accessToken', accessToken);
    const refreshToken = generateToken({ id: admin.id }, 30);
    console.log('refreshToken', refreshToken);
    refreshTokens.push(refreshToken);
    return res.status(200).json({ accessToken, refreshToken, expiredDate });
  } catch (error) {
    console.log('error', error);
    return res.status(500).json(error);
  }
};

export default login;
