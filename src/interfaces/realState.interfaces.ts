import { z } from "zod";
import {
  arrayRealEstatesSchema,
  createRealEstateSchema,
  returnRealEstateSchema,
} from "../schemas/realState.schema";

type IRealStateRequest = z.infer<typeof createRealEstateSchema>;
type IRealStateReturn = z.infer<typeof returnRealEstateSchema>;
type IAllRealStateReturn = z.infer<typeof arrayRealEstatesSchema>;

export { IRealStateRequest, IRealStateReturn, IAllRealStateReturn };
