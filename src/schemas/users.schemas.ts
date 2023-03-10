import { hashSync } from "bcryptjs";
import { z } from "zod";

const createUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  admin: z.boolean().optional().nullable(),
  password: z.string().transform((password) => {
    return hashSync(password, 10);
  }),
});

const createUserSchemaReturn = createUserSchema
  .extend({
    id: z.number(),
    deteledAt: z.date().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
  })
  .omit({ password: true });

const allUsersSchema = z.array(createUserSchemaReturn);
const userUpdateSchema = createUserSchema.partial();

export {
  createUserSchema,
  createUserSchemaReturn,
  allUsersSchema,
  userUpdateSchema,
};
