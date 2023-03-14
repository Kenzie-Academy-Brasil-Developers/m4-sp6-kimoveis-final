import { Request, Response } from "express";

import { ICategoryRequest } from "../interfaces/categories.interfaces";
import createCategoryService from "../services/categories/createCategory.service";
import readAllCategoriesService from "../services/categories/readAllCategories.service";
import listCategoriesWithRealEstateService from "../services/categories/readCategoriesWithRealEstate.service";

const createCategoryController = async (req: Request, res: Response) => {
  const categoryData: ICategoryRequest = req.body;

  const categoryCreataed = await createCategoryService(categoryData);

  res.status(201).json(categoryCreataed);
};

const readAllCategoriesController = async (req: Request, res: Response) => {
  const allUsers = await readAllCategoriesService();

  res.json(allUsers);
};

const listCategoriesWithRealEstateController = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  const id = Number(req.params.id);

  const allEstatesWithCategory = await listCategoriesWithRealEstateService(id);

  return resp.status(200).json(allEstatesWithCategory);
};

export {
  createCategoryController,
  readAllCategoriesController,
  listCategoriesWithRealEstateController,
};
