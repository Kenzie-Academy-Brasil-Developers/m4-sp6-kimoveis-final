import { Request, Response } from "express";
import createCategoryService from "../services/categories/createCategory.service";
import readAllCategoriesService from "../services/categories/readAllCategories.service";

const createCategoryController = async (req: Request, res: Response) => {
  const categoryData = req.body;

  const categoryCreataed = await createCategoryService(categoryData);

  res.status(201).json(categoryCreataed);
};

const readAllCategoriesController = async (req: Request, res: Response) => {
  const allUsers = await readAllCategoriesService();

  res.json(allUsers);
};

export { createCategoryController, readAllCategoriesController };
