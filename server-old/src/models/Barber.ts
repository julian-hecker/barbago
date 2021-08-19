import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Barber extends Model {
    public id!: number;
    public email!: string;
    public first_name!: string;
    public last_name!: string;
    public phone?: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    getFullName() {
        return `${this.first_name} ${this.last_name}`;
    }
}

Barber.init(
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'barber',
    },
);

export default Barber;
