import { Router } from "express";
import {
  createCategoryController,
  readAllCategoriesController,
} from "../controllers/categories.controller";
import ensureCategoryIsUniqueMiddleware from "../middlewares/categories/ensureCategoryIsUnique.middleware";

const categoriesRoutes: Router = Router();

//criar zod de categories
//tipar criacao

categoriesRoutes.post(
  "",
  ensureCategoryIsUniqueMiddleware,
  createCategoryController
);
categoriesRoutes.get("", readAllCategoriesController);
export default categoriesRoutes;
