import { Router } from "express";
import { createRealStateController } from "../controllers/realState.controller";
import { createScheduleController } from "../controllers/schedules.controller";
import ensureDataIsValidMiddleWare from "../middlewares/user/ensureDataIsValid.middlewares";
import { createScheduleSchema } from "../schemas/shcedule.schema";

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "",
  ensureDataIsValidMiddleWare(createScheduleSchema),
  createScheduleController
);

export default schedulesRoutes;
