import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { Repository } from "typeorm";
import { IAllRealStateReturn } from "../../interfaces/realState.interfaces";

const readAllRealStateService = async (): Promise<IAllRealStateReturn> => {
  const RealEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const findRealState: any = await RealEstateRepository.find({
    relations: {
      address: true,
    },
  });

  return findRealState;
};

export default readAllRealStateService;
