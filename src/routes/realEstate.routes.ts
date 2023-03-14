import { Router } from "express";
import {
  createRealStateController,
  readAllRealStatesController,
} from "../controllers/realState.controller";
import ensureTokenIsValidMiddleware from "../middlewares/login/ensureTokenIsValid.middleware";
import ensureDataIsValidMiddleWare from "../middlewares/ensureDataIsValid.middlewares";
import { createRealEstateSchema } from "../schemas/realState.schema";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middleware";

const realStateRoutes: Router = Router();

realStateRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureUserIsAdminMiddleware,
  ensureDataIsValidMiddleWare(createRealEstateSchema),
  createRealStateController
);

realStateRoutes.get("", readAllRealStatesController);

export default realStateRoutes;
