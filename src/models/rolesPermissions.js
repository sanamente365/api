import { Roles } from "../models/roles.js";
import { Permissions } from "../models/permissions.js";
import { sequelize } from "../database/dataBase.js";
import { DataTypes } from "sequelize";

export const RolesPermissions = sequelize.define('RolesPermissions', {
    rolesPermissions_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    RoleRolesId: {
        type: DataTypes.INTEGER,
        references: {
            model: Roles,
            key: 'roles_id'
        }
    },
    PermissionPermissionsId: {
        type: DataTypes.INTEGER,
        references: {
            model: Permissions,
            key: 'permissions_id'
        }
    }
})