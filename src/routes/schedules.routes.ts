import { Router } from "express";
import { createRealStateController } from "../controllers/realState.controller";
import {
  createScheduleController,
  readScheduleController,
} from "../controllers/schedules.controller";
import ensureTokenIsValidMiddleware from "../middlewares/login/ensureTokenIsValid.middleware";
import ensureDataIsValidMiddleWare from "../middlewares/user/ensureDataIsValid.middlewares";
import { createScheduleSchema } from "../schemas/shcedule.schema";

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
  readScheduleController
);

export default schedulesRoutes;
