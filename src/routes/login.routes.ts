import { Router } from "express";
import { createLoginController } from "../controllers/login.controller";
import ensureDataIsValidMiddleWare from "../middlewares/ensureDataIsValid.middlewares";
import { createLoginSchema } from "../schemas/login.schema";

const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  ensureDataIsValidMiddleWare(createLoginSchema),
  createLoginController
);
export default loginRoutes;
