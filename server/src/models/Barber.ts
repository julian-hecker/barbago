import Sequelize from 'sequelize';
import db from '../config/database.js';

const Barber = db.define('barber', {
    title: {
        type: Sequelize.STRING,
    },
});

export default Barber;
