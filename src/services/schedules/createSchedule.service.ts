import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate, Schedule, User } from "../../entities";
import { Repository } from "typeorm";
import {
  IRealStateRequest,
  IRealStateReturn,
} from "../../interfaces/realState.interfaces";
import { createRealStateSchemaReturn } from "../../schemas/realState.schema";
import { IScheduleRequest } from "../../interfaces/schedules.interfaces";
import { createScheduleSchemaReturn } from "../../schemas/shcedule.schema";

const createScheduleService = async (
  scheduleData: IScheduleRequest
): Promise<any> => {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const realEstate = await realEstateRepository.findOneBy({
    id: scheduleData.realEstateId,
  });
  const user = 1;

  const date = new Date(scheduleData.date);

  const schedule = scheduleRepository.create({
    ...scheduleData,
    date: date,
    RealEstate: realEstate!,
  });

  await scheduleRepository.save(schedule);

  const newSchedule = createScheduleSchemaReturn.parse(schedule);

  return newSchedule;
};

export default createScheduleService;
