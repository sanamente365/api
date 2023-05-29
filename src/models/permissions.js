import { DataTypes } from "sequelize";
import { sequelize } from '../database/dataBase.js';

export const Permissions = sequelize.define('Permissions', {
    permissions_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    permissions_name: {
        type: DataTypes.STRING
    }
})