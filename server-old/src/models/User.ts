import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {
  public id: number;
  public email: string;
  public name: string;
  public password: string;
  public oauthId: string;
  public oauthType: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    oauthId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    oauthType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'user',
  },
);

export default User;
