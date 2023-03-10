import { z } from "zod";
import {
  allRealStatesSchema,
  createRealStateSchema,
  createRealStateSchemaReturn,
} from "../schemas/realState.schema";

type IRealStateRequest = z.infer<typeof createRealStateSchema>;
type IRealStateReturn = z.infer<typeof createRealStateSchemaReturn>;
type IAllRealStateReturn = z.infer<typeof allRealStatesSchema>;
// type IUserUpdate = z.infer<typeof userUpdateSchema>;

export { IRealStateRequest, IRealStateReturn, IAllRealStateReturn };
