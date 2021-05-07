import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {
    public id!: number;
    public email!: string;
    public password!: string;
    public first_name!: string;
    public last_name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    getFullName() {
        return `${this.first_name} ${this.last_name}`;
    }
}

User.init(
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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'user',
    },
);

export default User;
