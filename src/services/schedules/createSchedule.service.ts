import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { Repository } from "typeorm";
import { IScheduleRequest } from "../../interfaces/schedules.interfaces";
import { AppError } from "../../errors";
import { IUserInfo } from "../../interfaces/users.interfaces";

const createScheduleService = async (
  scheduleData: IScheduleRequest,
  userData: IUserInfo
): Promise<object> => {
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

  const workDays = [1, 2, 3, 4, 5];
  const minHour = 8;
  const maxHour = 18;

  const scheduledDate = new Date(scheduleData.date);
  const hour = Number(scheduleData.hour.split(":")[0]);

  if (!workDays.includes(scheduledDate.getDay())) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  if (hour < minHour || hour >= maxHour) {
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
};

export default createScheduleService;
