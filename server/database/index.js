// if (process.env.NODE_ENV !== 'production') {
//     import dotenv from 'dotenv';
//     dotenv.config();
// }

import Sequelize from 'sequelize';
const connectionURI = process.env.BARBAGO_DB_URI;

const db = new Sequelize(connectionURI, {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

module.exports = db;
