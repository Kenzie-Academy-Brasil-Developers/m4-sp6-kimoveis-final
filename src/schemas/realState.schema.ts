import { z } from "zod";

//todo

//ver como ta SOLD da coluna --- entender
//veririficar duplicidade do endereço
//rota so pode ser acessada por adm
const addressSchema = z.object({
  street: z.string(),
  zipCode: z.string().max(8),
  number: z.string().optional().nullable(),
  city: z.string(),
  state: z.string().max(2),
});

const createRealStateSchema = z.object({
  value: z.number().transform((val) => parseFloat(val.toFixed(2))),
  size: z.number().int(),
  address: addressSchema,
  // categoryId: z.number(),
});

const createRealStateSchemaReturn = createRealStateSchema.extend({
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const allRealStatesSchema = z.array(createRealStateSchemaReturn);

export {
  createRealStateSchema,
  createRealStateSchemaReturn,
  allRealStatesSchema,
};
