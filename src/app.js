import express from "express";

import permissions from "./routes/permission.routes.js";
import roles from "./routes/roles.routes.js";
import users from "./routes/user.routes.js";

//swagger
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from "swagger-jsdoc";
import { option } from "./swaggerOption.js";

const app = express();

app.use(express.json());


app.use(permissions);
app.use(roles);
app.use(users);

const spec = swaggerJSDoc(option);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(spec));

export default app;