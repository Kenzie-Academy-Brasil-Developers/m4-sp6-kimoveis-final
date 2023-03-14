import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { Repository } from "typeorm";
import {
  IRealStateRequest,
  IRealStateReturn,
} from "../../interfaces/realState.interfaces";
import { returnRealEstateSchema } from "../../schemas/realState.schema";
import { AppError } from "../../errors";

const createRealEstateService = async (
  realStateData: IRealStateRequest
): Promise<IRealStateReturn> => {
  const realStateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const { categoryId, address, size, value } = realStateData;

  const addressExists = await addressRepository
    .createQueryBuilder("address")
    .select(["address"])
    .where("address.street = :street", { street: address.street })
    .andWhere("address.zipCode = :zipCode", { zipCode: address.zipCode })
    .getOne();

  if (addressExists) {
    throw new AppError("Address already exists", 409);
  }

  const newaddress = addressRepository.create(address);
  await addressRepository.save(newaddress);

  const category = await categoriesRepository.findOneBy({
    id: categoryId,
  });
  if (!category) {
    throw new AppError("category not found", 404);
  }

  const realState = realStateRepository.create({
    value,
    size,
    category: category,
    address: newaddress,
  });

  await realStateRepository.save(realState);

  const newRealState: IRealStateReturn =
    returnRealEstateSchema.parse(realState);

  return newRealState;
};

export default createRealEstateService;
