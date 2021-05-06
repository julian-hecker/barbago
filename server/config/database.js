import Sequelize from 'sequelize';

import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const connectionURI = process.env.BARBAGO_DB_URI;

const db = new Sequelize(connectionURI, {
    logging:
        process.env.NODE_ENV === 'production' ? false : console.log,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

export default db;
