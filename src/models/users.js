import { Roles } from "./roles.js";
import { DataTypes } from "sequelize";
import { sequelize } from "../database/dataBase.js";
import { UserToken } from "./userToken.js";


export const User = sequelize.define("users", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    RoleRolesId: {
        type: DataTypes.INTEGER,
        references: {
            model: Roles,
            key: 'roles_id'
        }
    }
})

Roles.hasMany(User);
User.belongsTo(Roles);

User.hasOne(UserToken);
UserToken.belongsTo(User);