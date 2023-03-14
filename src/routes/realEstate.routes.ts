import { Router } from "express";
import {
  createRealStateController,
  readAllRealStatesController,
} from "../controllers/realState.controller";
import ensureTokenIsValidMiddleware from "../middlewares/login/ensureTokenIsValid.middleware";
import ensureDataIsValidMiddleWare from "../middlewares/user/ensureDataIsValid.middlewares";
import { realEstateSchema } from "../schemas/realState.schema";

const realStateRoutes: Router = Router();

realStateRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddleWare(realEstateSchema),
  createRealStateController
);

realStateRoutes.get("", readAllRealStatesController);

export default realStateRoutes;
