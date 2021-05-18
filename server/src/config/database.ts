import { Sequelize } from 'sequelize';
import { DB_URI } from '.';

const sequelize = new Sequelize(DB_URI, {
    logging:
        process.env.NODE_ENV === 'production' ? false : console.log,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

export default sequelize;
