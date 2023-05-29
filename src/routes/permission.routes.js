import { Router } from "express";
import { getPermissions, createPermissions } from "../controllers/permissions.controller.js";

const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Permission:
 *      type: object
 *      properties:
 *        permissions_id:
 *          type: integer
 *          description: id del perimiso
 *        permissions_name:
 *          type: string
 *          description: nombre del permiso
 *      required:
 *        - permissions_name
 *      example:
 *        permissions_id: 1
 *        permissions_name: create_product
 */
/**
 * @swagger
 * tags:
 *  name: Permission
 *  description: Permission endpoint
 */
/**
 * @swagger
 * /api/permission:
 *   get:
 *    sumary: retorna todos los permisos
 *    tags: [Permission]
 *    responses:
 *      '200': 
 *        description: lista de usuarios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Permission'
 */
router.get("/api/permission", getPermissions);

/**
 * @swagger
 * /api/permission:
 *   post:
 *    sumary: create permission
 *    tags: [Permission]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Permission'
 *    responses:
 *      200:
 *        description: the project succesfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Permission'
 */
router.post("/api/permission", createPermissions);

export default router;