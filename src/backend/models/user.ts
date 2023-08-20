import { DataTypes } from 'sequelize';
import {data} from '../config/connection';

const User = data.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, 
    name: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    corFavorita: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    verdade: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
  }, {
    timestamps: false,
  })

  export default User;