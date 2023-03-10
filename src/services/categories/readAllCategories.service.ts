import { AppDataSource } from "../../data-source";
import { Category, User } from "../../entities";
import { Repository } from "typeorm";

const readAllCategoriesService = async (): Promise<any> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategory: any = await categoryRepository.find();

  return findCategory;
};

export default readAllCategoriesService;
