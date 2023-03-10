import { z } from "zod";

const createScheduleSchema = z.object({
  date: z.string() || z.date(),
  hour: z.string(),
  realEstateId: z.number(),
});

const createScheduleSchemaReturn = createScheduleSchema.extend({
  id: z.number(),
  user: z.number(),
});

export { createScheduleSchema, createScheduleSchemaReturn };
