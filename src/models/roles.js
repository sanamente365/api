import { DataTypes } from "sequelize";
import { sequelize } from '../database/dataBase.js';

export const Roles = sequelize.define('Roles', {
    roles_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rol_name: {
        type: DataTypes.STRING
    }
})

