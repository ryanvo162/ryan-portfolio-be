import { Request } from 'express';
import jwt from 'jsonwebtoken';

export const generateToken = (data: any, days?: number) => {
  return jwt.sign(
    {
      data,
    },
    process.env.JWT_SECRET_KEY || '',
    { expiresIn: 60 * 60 * 24 * (days || 1) }
  );
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY || '');
};

export const decodeToken = (token: string) => {
  return jwt.decode(token);
};

export const getTokenFromRequest = (req: Request) => {
  const authorization = req.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }
  return null;
};
