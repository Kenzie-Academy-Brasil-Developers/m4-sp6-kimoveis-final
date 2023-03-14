import { z } from "zod";

const createScheduleSchema = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
});

const createScheduleSchemaReturn = createScheduleSchema.extend({
  id: z.number(),
  user: z.any(),
  realEstateId: z.any(),
});

export { createScheduleSchema, createScheduleSchemaReturn };
