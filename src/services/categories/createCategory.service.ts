import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { Repository } from "typeorm";
import {
  ICategoryRequest,
  ICategoryRequestReturn,
} from "../../interfaces/categories.interfaces";

const createCategoryService = async (
  userData: ICategoryRequest
): Promise<ICategoryRequestReturn> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category = categoryRepository.create(userData);

  await categoryRepository.save(category);

  return category;
};

export default createCategoryService;
