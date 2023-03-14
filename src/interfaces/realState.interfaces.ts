import { z } from "zod";
import {
  arrayRealEstatesSchema,
  realEstateSchema,
  returnRealEstateSchema,
} from "../schemas/realState.schema";

type IRealStateRequest = z.infer<typeof realEstateSchema>;
type IRealStateReturn = z.infer<typeof returnRealEstateSchema>;
type IAllRealStateReturn = z.infer<typeof arrayRealEstatesSchema>;
// type IUserUpdate = z.infer<typeof userUpdateSchema>;

export { IRealStateRequest, IRealStateReturn, IAllRealStateReturn };
