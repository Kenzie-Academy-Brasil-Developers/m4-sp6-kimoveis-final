import { z } from "zod";
import {
  createCategorySchema,
  createCategorySchemaReturn,
} from "../schemas/categories.schema";

type ICategoryRequest = z.infer<typeof createCategorySchema>;
type ICategoryRequestReturn = z.infer<typeof createCategorySchemaReturn>;

export { ICategoryRequest, ICategoryRequestReturn };
