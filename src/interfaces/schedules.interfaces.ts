import { z } from "zod";
import { createScheduleSchema } from "../schemas/shcedule.schema";

type IScheduleRequest = z.infer<typeof createScheduleSchema>;

export { IScheduleRequest };
