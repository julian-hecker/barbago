import Sequelize from 'sequelize';
import db from '../config/database.js';

const Appointment = db.define('appointment', {});

export default Appointment;
