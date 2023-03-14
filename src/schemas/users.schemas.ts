import { z } from "zod";

const createUserSchema = z.object({
  name: z.string().max(45),
  email: z.string().email(),
  admin: z.boolean().optional().default(false),
  password: z.string(),
});

const createUserSchemaReturn = createUserSchema
  .extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
  })
  .omit({ password: true });

const allUsersSchema = z.array(createUserSchemaReturn);

const userUpdateSchema = z.object({
  name: z.string().max(45).optional(),
  email: z.string().email().max(45).optional(),
  password: z.string().optional(),
});

export {
  createUserSchema,
  createUserSchemaReturn,
  allUsersSchema,
  userUpdateSchema,
};
