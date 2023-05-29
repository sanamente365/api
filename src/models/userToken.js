import { DataTypes } from "sequelize";
import { sequelize } from '../database/dataBase.js';

export const UserToken = sequelize.define('UserToken', {
    user_token: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_token: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})