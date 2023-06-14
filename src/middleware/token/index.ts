import { NextFunction, Request, Response } from 'express';
import { getTokenFromRequest, verifyToken } from '../../utils/token';

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = getTokenFromRequest(req);

  if (!token)
    return res
      .status(401)
      .json({ message: 'Access denied. No token provided' });
  try {
    verifyToken(token);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
