import { Permissions } from "../models/permissions.js";

export const getPermissions = async (req, res) => {
    try {
        const permissions = await Permissions.findAll();
        res.json(permissions);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const createPermissions = async (req, res) => {
    const { permissions_name } = req.body

    try {
        const newPermissions = await Permissions.create({
            permissions_name: permissions_name
        })
        res.json(newPermissions)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}