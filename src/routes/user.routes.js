import { Router } from "express";
import { getUsers, createUser, singin } from "../controllers/users.controller.js"
const router = Router();
/**
 * @swagger
 * components:
 *  schemas:
 *    UserCreate:
 *      type: object
 *      properties:
 *        user_name:
 *          type: string
 *          description: nombre de usuario
 *        rol:
 *          type: string
 *          description: id del rol que se le asignara al usuario
 *        password:
 *          type: string
 *          description: contraseña
 *      required:
 *        - user_name
 *        - rol
 *        - password
 *      example:
 *        user_name: vendedor19
 *        rol: 1
 *        password: sadasdsadasd
 *    Signup:
 *      type: object
 *      properties:
 *        error:
 *          type: null
 *          description: descripcion del error
 *        token:
 *          type: string
 *          description: token de la sesion
 *        rol:
 *          type: string
 *          description: nombre del rol
 *      example:
 *        error: null
 *        token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlc19pZCI6MSwicm9sX25hbWUiOiJ2ZW5kZWRvciIsInVzZXJfbmFtZSI6InZlbmRlZG9yMTkiLCJ1c2VyX2lkIjoxMSwiaWF0IjoxNjg1MzI1MzY4fQ.rgpkcY25B6jcJXPDgAZgbx_1ncUJTkh0CC_Yq1wZDsw
 *        rol: vendedor
 *    Users:
 *      type: object
 *      properties:
 *        user_id:
 *          type: integer
 *          description: id del usuario
 *        user_name:
 *          type: string
 *          description: nombre de uaurio
 *        RoleRolesId:
 *          type: integer
 *          description: clave foranea del rol que posee
 *        Role:
 *          type: object
 *          description: id y nombre del rol que posee
 *          properties:
 *              roles_id:
 *                  type: integer
 *                  description: id del rol
 *              rol_name:
 *                  type: string
 *                  description: nombre del rol de usuario que posee
 *              createdAt:
 *                  type: string
 *                  description: fecha en la que se creo el registro
 *              updatedAt:
 *                  type: string
 *                  description: decha en la que se hizo la ultima modificacion 
 *      example:
 *        user_id: 10
 *        user_name: vendedor16
 *        RoleRolesId: 1
 *        Role:
 *          roles_id: 1
 *          rol_name: vendedor
 *          createdAt: 2023-05-19T23:40:30.251Z
 *          updatedAt: 2023-05-19T23:40:30.251Z
 *    ErrorinTheParameters:
 *      type: object
 *      properties:
 *        error:
 *          type: string
 *          description: error en los pararmetros
 *      example:
 *        error: ¡This username already exists!
 */
/**
 * @swagger
 * tags:
 *  name: User
 *  description: user endpoint
 */
/**
 * @swagger
 * /api/getuser:
 *   get:
 *    sumary: return a task list
 *    tags: [User]
 *    responses:
 *      '200': 
 *        description: lista de usuarios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Users'
 */
router.get("/api/getuser", getUsers);
/**
 * @swagger
 * /api/signup:
 *   post:
 *    sumary: create project
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserCreate'
 *    responses:
 *      200:
 *        description: the project succesfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Signup'
 *      400:
 *        description: error en los parametros 
 *        content:
 *          application/json:
 *              schema:
 *                $ref: '#/components/schemas/ErrorinTheParameters'  
 */
router.post("/api/signup", createUser);
/**
 * @swagger
 * /api/singin:
 *   post:
 *    sumary: create project
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              user_name:
 *                  type: string
 *                  description: nombre de usuario
 *              password:
 *                  type: string
 *                  description: contraseña
 *            require:
 *              - user_name
 *              - password
 *            example:
 *              user_name: vendedor16
 *              password: password
 *    responses:
 *      200:
 *        description: the project succesfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Signup'
 *      400:
 *        description: error en los parametros 
 *        content:
 *          application/json:
 *              schema:
 *                $ref: '#/components/schemas/ErrorinTheParameters'  
 */
router.post("/singin", singin);
export default router;