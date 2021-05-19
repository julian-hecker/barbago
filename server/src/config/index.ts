import dotenv from 'dotenv';
export const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV !== 'production') {
  dotenv.config();
}

export const PORT = process.env.PORT || 3001;
export const DB_URI = process.env.BARBAGO_DB_URI || '';

export const SESSION_SECRET = process.env.SESSION_SECRET || '';

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
export const GOOGLE_CLIENT_SECRET =
process.env.GOOGLE_CLIENT_SECRET || '';

export const FACEBOOK_CLIENT_ID =
process.env.FACEBOOK_CLIENT_ID || '';
export const FACEBOOK_CLIENT_SECRET =
process.env.FACEBOOK_CLIENT_SECRET || '';


// Deprecated, remove asap
export const JWT_SECRET = process.env.JWT_SECRET || '';
