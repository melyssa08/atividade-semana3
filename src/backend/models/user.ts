import { DataTypes } from 'sequelize';
import {data} from '../config/connection';

const User = data.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, 
    name: {
        type: DataTypes.STRING(16),
        allowNull: true
    },
    age: {
        type: DataTypes.STRING(16),
        allowNull: true
    }
  })

  export default User;