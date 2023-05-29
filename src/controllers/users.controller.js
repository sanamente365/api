import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import Joi from "@hapi/joi";
import { User } from "../models/users.js";
import { Roles } from "../models/roles.js";
import { UserToken } from "../models/userToken.js";
dotenv.config();

const schemaLogin = Joi.object({
    user_name: Joi.string().min(6).max(60).required(),
    password: Joi.string().min(6).max(120).required(),
});

const schemaRegister = Joi.object({
    user_name: Joi.string().min(6).max(60).required(),
    password: Joi.string().min(6).max(120).required(),
    rol: Joi.number().required(),
});

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [
                {
                    model: Roles,
                },
            ],
            attributes: {
              exclude: ["password", "createdAt", "updatedAt"]
            }
        });
        res.json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    const { error } = schemaRegister.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { user_name, rol, password } = req.body;

    try {
        const rolId = Number(rol);
        const searchUser = await User.findOne({
            where: {
                user_name: user_name,
            },
        });

        if (searchUser)
            return res
                .status(400)
                .json({
                    error:  "¡This username already exists!",
                });

        const searchRol = await Roles.findByPk(rolId);

        if (!searchRol)
            return res
                .status(400)
                .json({ error: true, mensaje: "¡The role does not exist!" });

        const jumps = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(password, jumps);
        const newUser = await User.create({
            user_name: user_name,
            RoleRolesId: rolId,
            password: pass,
        });

        const rolUser = await Roles.findByPk(newUser.RoleRolesId);

        const token = jwt.sign(
            {
                roles_id: rolUser.roles_id,
                rol_name: rolUser.rol_name,
                user_name: newUser.user_name,
                user_id: newUser.user_id,
            },
            process.env.TOKEN_SECRET
        );

        await UserToken.create({
            user_token: token,
            status: true,
            userUserId: newUser.user_id,
        });

        res.header("auth-token", token).json({
            error: null,
            token: token,
            rol: rolUser.rol_name,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const singin = async (req, res) => {
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    const { user_name, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                user_name: user_name,
            },
            include: [UserToken, Roles],
        });
        if (!user)
            return res
                .status(400)
                .json({ error: true, mensaje: "!Error in the parameters¡" });
        const passValida = await bcrypt.compare(password, user.password);
        if (!passValida)
            return res
                .status(400)
                .json({ error: true, mensaje: "!Error in the parameters¡" });
        res.header("auth-token", user.UserToken.user_token).json({
            error: null,
            token: user.UserToken.user_token,
            rol: user.Role.rol_name,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
