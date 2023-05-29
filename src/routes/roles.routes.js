import { Router } from "express";
import { getRoles, createRol } from "../controllers/roles.controller.js";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Rol:
 *      type: object
 *      properties:
 *        roles_id:
 *          type: integer
 *          description: id del rol
 *        rol_name:
 *          type: string
 *          description: nombre del rol
 *      required:
 *        - rol_name
 *      example:
 *        roles_id: 1
 *        rol_name: vendedor
 *    CreateRol:
 *      type: object
 *      properties:
 *          rol_name:
 *              type: string
 *              description: nombre del nuevo rol
 *          permissions:
 *              type: array
 *              description: id de los permisos que se asignaran
 *      example:
 *          rol_name: vendedor 2
 *          permissions: ["1","2"]
 *    ResRol:
 *      type: object
 *      properties:
 *          roles_id:
 *              type: integer
 *              description: id del rol
 *          rol_name:
 *              type: string
 *              descrition: nombre del rol
 *          createdAt:
 *              type: string
 *              description: fecha donde se creo el registro
 *          updatedAt:
 *              type: string
 *              description: ultima fecha donde se modifico el registro
 *          permissions:
 *              type: array
 *              description: array de permisos
 *              items:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          permissions_id:
 *                              type: integer
 *                              description: id del permiso
 *                          permissions_name:
 *                              type: string
 *                              description: nombre del perimiso
 *                          RolesPermissions:
 *                              type: object
 *                              properties:
 *                                  rolesPermissions_id:
 *                                      type: integer
 *                                      description: id de la tabla rolesPermissions_id
 *                                  RoleRolesId:
 *                                      type: integer
 *                                      description: id rol que es clave foranea
 *                                  PermissionPermissionsId:
 *                                      type: integer
 *                                      description: id del permiso que es clave foranea
 *                                  createdAt:
 *                                      type: string
 *                                      description: fecha donde se creo el registro
 *                                  updatedAt:
 *                                      type: string
 *                                      description: ultima fecha donde se modifico el registro
 *      example:
 *          roles_id: 1
 *          rol_name: vendedor
 *          createdAt: 2023-05-29T13:10:52.624Z
 *          updatedAt: 2023-05-29T13:10:52.624Z
 *          permissions:
 *              permissions_id: 1
 *              permissions_name: create_product
 *              RolesPermissions:
 *                  rolesPermissions_id: 5
 *                  RoleRolesId: 3
 *                  PermissionPermissionsId: 1
 *                  createdAt: 2023-05-29T13:10:52.624Z
 *                  updatedAt: 2023-05-29T13:10:52.624Z
 */
/**
 * @swagger
 * tags:
 *  name: Roles
 *  description: roles endpoint
 */
/**
 * @swagger
 * /api/roles:
 *   get:
 *    sumary: retorna todos los permisos
 *    tags: [Roles]
 *    responses:
 *      '200': 
 *        description: lista de usuarios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Rol'
 */
router.get("/api/roles", getRoles);

/**
 * @swagger
 * /api/roles:
 *   post:
 *    sumary: create rol
 *    tags: [Roles]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateRol'
 *    responses:
 *      200:
 *        description: the project succesfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ResRol'
 */
router.post("/api/roles", createRol);

export default router;