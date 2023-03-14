import { Router } from "express";
import {
  createScheduleController,
  readScheduleController,
} from "../controllers/schedules.controller";
import ensureTokenIsValidMiddleware from "../middlewares/login/ensureTokenIsValid.middleware";
import ensureDataIsValidMiddleWare from "../middlewares/ensureDataIsValid.middlewares";
import { createScheduleSchema } from "../schemas/shcedule.schema";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middleware";

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddleWare(createScheduleSchema),
  createScheduleController
);

schedulesRoutes.get(
  "/realEstate/:id",
  ensureTokenIsValidMiddleware,
  ensureUserIsAdminMiddleware,
  readScheduleController
);

export default schedulesRoutes;
