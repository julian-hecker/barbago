import dotenv from 'dotenv';
export const NODE_ENV = process.env.NODE_ENV || '';

if (NODE_ENV !== 'production') {
    dotenv.config();
}

export const PORT = process.env.PORT || 3001;
export const DB_URI = process.env.BARBAGO_DB_URI || '';
export const JWT_SECRET = process.env.JWT_SECRET || '';
export const SESSION_SECRET = process.env.SESSION_SECRET || '';

