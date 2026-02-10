import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import folderRouter from "./adapters/http/folder.routes";
import { loginController } from "./adapters/http/auth.controller"; 

const app = express();
app.use(express.json());

// Swagger
const swaggerDocument = YAML.load("./openapi/openapi.yaml");
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API
app.post("/login", loginController); 
app.use("/folders", folderRouter);

app.listen(3001, () => {
  console.log("Backend en http://localhost:3001");
  console.log("Docs en http://localhost:3001/docs");
});