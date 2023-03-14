import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
const listCategoriesWithRealEstateService = async (
  idCategorie: number
): Promise<any> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategory = await categoryRepository.findOneBy({
    id: idCategorie,
  });

  if (!findCategory) {
    throw new AppError("Category not found", 404);
  }

  const findCategoryWithRealEstate = await categoryRepository.findOne({
    where: { id: idCategorie },
    relations: {
      realEstate: true,
    },
  });

  return findCategoryWithRealEstate;
};

export default listCategoriesWithRealEstateService;
