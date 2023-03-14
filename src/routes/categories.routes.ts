import { Router } from "express";
import {
  createCategoryController,
  listCategoriesWithRealEstateController,
  readAllCategoriesController,
} from "../controllers/categories.controller";
import ensureCategoryIsUniqueMiddleware from "../middlewares/categories/ensureCategoryIsUnique.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/login/ensureTokenIsValid.middleware";
import ensureDataIsValidMiddleWare from "../middlewares/user/ensureDataIsValid.middlewares";
import { createCategorySchema } from "../schemas/categories.schema";

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddleWare(createCategorySchema),
  ensureCategoryIsUniqueMiddleware,
  createCategoryController
);
categoriesRoutes.get("", readAllCategoriesController);
categoriesRoutes.get("/:id/realEstate", listCategoriesWithRealEstateController);
export default categoriesRoutes;
