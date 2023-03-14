import { z } from "zod";
import { createCategorySchemaReturn } from "./categories.schema";

const addressSchema = z.object({
  street: z.string().min(3).max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).nullable().optional(),
  city: z.string().max(20),
  state: z.string().max(2),
});

const returnAddressSchema = addressSchema.extend({
  id: z.number().int(),
});

const createRealEstateSchema = z.object({
  value: z.string().or(z.number()),
  size: z.number().positive(),
  address: addressSchema,
  categoryId: z.number(),
});

const returnRealEstateSchema = createRealEstateSchema
  .omit({
    categoryId: true,
  })
  .extend({
    id: z.number(),
    sold: z.boolean(),
    address: returnAddressSchema,
    category: createCategorySchemaReturn,
    createdAt: z.string(),
    updatedAt: z.string(),
  });

const arrayRealEstatesSchema = returnRealEstateSchema.array();

const manyRealEstateSchemaWithoutCategory = createRealEstateSchema
  .omit({
    categoryId: true,
  })
  .array();

const returnRealEstatesByCategorySchema = returnRealEstateSchema.extend({
  realEstates: manyRealEstateSchemaWithoutCategory,
});

export {
  createRealEstateSchema,
  returnRealEstateSchema,
  arrayRealEstatesSchema,
  returnRealEstatesByCategorySchema,
  manyRealEstateSchemaWithoutCategory,
};
