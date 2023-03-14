import { Router } from "express";
import {
  createCategoryController,
  listCategoriesWithRealEstateController,
  readAllCategoriesController,
} from "../controllers/categories.controller";
import ensureCategoryIsUniqueMiddleware from "../middlewares/categories/ensureCategoryIsUnique.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/login/ensureTokenIsValid.middleware";
import ensureDataIsValidMiddleWare from "../middlewares/ensureDataIsValid.middlewares";
import { createCategorySchema } from "../schemas/categories.schema";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middleware";

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureUserIsAdminMiddleware,
  ensureDataIsValidMiddleWare(createCategorySchema),
  ensureCategoryIsUniqueMiddleware,
  createCategoryController
);
categoriesRoutes.get("", readAllCategoriesController);
categoriesRoutes.get("/:id/realEstate", listCategoriesWithRealEstateController);
export default categoriesRoutes;
