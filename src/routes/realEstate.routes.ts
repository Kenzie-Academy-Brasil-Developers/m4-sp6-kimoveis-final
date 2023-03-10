import { Router } from "express";
import {
  createRealStateController,
  readAllRealStatesController,
} from "../controllers/realState.controller";
import ensureDataIsValidMiddleWare from "../middlewares/user/ensureDataIsValid.middlewares";
import { createRealStateSchema } from "../schemas/realState.schema";

const realStateRoutes: Router = Router();

realStateRoutes.post(
  "",
  ensureDataIsValidMiddleWare(createRealStateSchema),
  createRealStateController
);

realStateRoutes.get("", readAllRealStatesController);

export default realStateRoutes;
