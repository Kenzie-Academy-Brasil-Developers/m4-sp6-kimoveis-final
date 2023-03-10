import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { Repository } from "typeorm";
import {
  IRealStateRequest,
  IRealStateReturn,
} from "../../interfaces/realState.interfaces";
import { createRealStateSchemaReturn } from "../../schemas/realState.schema";

const createUserService = async (
  realStateData: IRealStateRequest
): Promise<IRealStateReturn> => {
  const realStateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const newaddress = addressRepository.create({ ...realStateData.address });
  await addressRepository.save(newaddress);

  // const category = await categoriesRepository.findOneBy({
  //   id: realStateData.categoryId,
  // });

  const realState = realStateRepository.create({
    ...realStateData,
    address: newaddress,
  });

  await realStateRepository.save(realState);

  const newRealState = createRealStateSchemaReturn.parse(realState);

  return newRealState;
};

export default createUserService;
