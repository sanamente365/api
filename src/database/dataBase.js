import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(process.env.DB_NANE, process.env.DB_TYPE, process.env.DB_PASSWORD, {
    host: process.env.API_HOST,
    dialect: process.env.DB_DIALECT,
});
  