import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { Repository } from "typeorm";
import { ICategoryRequestReturn } from "../../interfaces/categories.interfaces";

const readAllCategoriesService = async (): Promise<ICategoryRequestReturn> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategory: any = await categoryRepository.find();

  return findCategory;
};

export default readAllCategoriesService;
