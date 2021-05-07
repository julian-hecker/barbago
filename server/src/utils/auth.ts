import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';

export const authenticateToken = (
    req: any,
    res: Response,
    next: NextFunction,
) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Unauthorized');

    try {
        const user = jwt.verify(token, JWT_SECRET);
        req.user = user;
        return next();
    } catch (error) {
        console.error(error);
        return res.status(401).json('Invalid Token');
    }
};

