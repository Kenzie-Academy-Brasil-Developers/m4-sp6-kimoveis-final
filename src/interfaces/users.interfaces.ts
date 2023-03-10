import { z } from "zod";
import {
  allUsersSchema,
  createUserSchema,
  createUserSchemaReturn,
  userUpdateSchema,
} from "../schemas/users.schemas";

type IUserRequest = z.infer<typeof createUserSchema>;
type IUserReturn = z.infer<typeof createUserSchemaReturn>;
type IAllUsersReturn = z.infer<typeof allUsersSchema>;
type IUserUpdate = z.infer<typeof userUpdateSchema>;

export { IUserRequest, IUserReturn, IAllUsersReturn, IUserUpdate };
