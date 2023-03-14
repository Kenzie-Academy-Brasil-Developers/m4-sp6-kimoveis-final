import { z } from "zod";
import {
  createScheduleSchema,
  createScheduleSchemaReturn,
} from "../schemas/shcedule.schema";

type IScheduleRequest = z.infer<typeof createScheduleSchema>;
type IScheduleReturn = z.infer<typeof createScheduleSchemaReturn>;

export { IScheduleRequest, IScheduleReturn };
