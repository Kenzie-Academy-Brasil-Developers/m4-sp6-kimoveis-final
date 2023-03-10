import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { Repository } from "typeorm";
import { createUserSchemaReturn } from "../../schemas/users.schemas";

const createCategoryService = async (userData: any): Promise<any> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category = categoryRepository.create(userData);

  await categoryRepository.save(category);

  return category;
};

export default createCategoryService;
