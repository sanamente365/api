import { Roles } from "../models/roles.js";
import { Permissions } from "../models/permissions.js";
import { RolesPermissions } from "../models/rolesPermissions.js";
import { json } from "sequelize";

export const getRoles = async (req, res) => {
  try {
    const roles = await Roles.findAll();
    res.json(roles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createRol = async (req, res) => {
  const { rol_name, permissions } = req.body;

  try {
    const newRol = await Roles.create({
      rol_name: rol_name,
    });
    const newRolePermissions = [];


    if (permissions.length > 0) {
      for (let i = 0; i < permissions.length; i++) {
        newRolePermissions.push({
          RoleRolesId: newRol.roles_id,
          PermissionPermissionsId: Number(permissions[i]),
        });
      }
      await RolesPermissions.bulkCreate(newRolePermissions);

      const data = await Roles.findByPk(newRol.roles_id, {
        include: [
          {
            model: Permissions,
          },
        ],
      });
      res.json(data);
    }
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

Roles.belongsToMany(Permissions, { through: RolesPermissions });
Permissions.belongsToMany(Roles, { through: RolesPermissions });
