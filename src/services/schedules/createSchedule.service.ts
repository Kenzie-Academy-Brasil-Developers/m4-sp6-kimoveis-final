import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { Repository } from "typeorm";
import { IScheduleRequest } from "../../interfaces/schedules.interfaces";
import { AppError } from "../../errors";

const createScheduleService = async (
  scheduleData: IScheduleRequest,
  userData: any
): Promise<any> => {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const scheduleQueryBuilder =
    scheduleRepository.createQueryBuilder("schedule");

  const realEstate = await realEstateRepository.findOneBy({
    id: scheduleData.realEstateId,
  });

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const ensureDateAndHourAsaSame = await scheduleQueryBuilder
    .select("schedule")
    .where("schedule.date = :date", { date: scheduleData.date })
    .andWhere("schedule.hour = :hour", { hour: scheduleData.hour })
    .andWhere("schedule.realEstateId = :realEstateId", {
      realEstateId: scheduleData.realEstateId,
    })
    .getOne();

  if (ensureDateAndHourAsaSame) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const ensureScheduleDataAndHourUser = await scheduleQueryBuilder
    .select("schedule")
    .where("schedule.date = :date", { date: scheduleData.date })
    .andWhere("schedule.hour = :hour", { hour: scheduleData.hour })
    .andWhere("schedule.user = :user", { user: userData.id })
    .getOne();

  if (ensureScheduleDataAndHourUser) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const data = new Date(scheduleData.date);
  const day = data.getDay();

  if (day === 0 || day === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  const hour = Number(scheduleData.hour.split(":")[0]);

  if (hour <= 7 || hour >= 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  let scheduleUpdate = {};

  if (userData.id) {
    scheduleUpdate = {
      ...scheduleData,
      realEstate: realEstate,
      user: userData.id,
    };
  }

  const newSchedule = scheduleRepository.create(scheduleUpdate);

  await scheduleRepository.save(newSchedule);

  const response = { message: "Schedule created" };

  return response;

  // const schedule: any = scheduleRepository.create({
  //   ...scheduleData,
  //   date: date,
  //   RealEstate: realEstate!,
  //   user: user!,
  // });

  // await scheduleRepository.save(schedule);

  // const newSchedule = createScheduleSchemaReturn.parse(schedule);

  // return newSchedule;
};

export default createScheduleService;
