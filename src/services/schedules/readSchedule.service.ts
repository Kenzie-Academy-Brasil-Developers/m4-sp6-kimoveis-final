import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";

const readScheduleService = async (idRealEstate: number): Promise<any> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const findRealEstate: RealEstate | null = await realEstateRepository.findOne({
    where: { id: idRealEstate },
    relations: {
      category: true,
      schedules: {
        user: true,
      },
      address: true,
    },
  });

  if (!findRealEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  return findRealEstate;
};

export { readScheduleService };
