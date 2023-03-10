import { Request, Response } from "express";
import { IScheduleRequest } from "../interfaces/schedules.interfaces";
import createScheduleService from "../services/schedules/createSchedule.service";

const createScheduleController = async (req: Request, res: Response) => {
  // if (req.user.admin === "false") {
  //   throw new AppError("only admins can create a real State", 403);
  // }

  const scheduleData: IScheduleRequest = req.body;

  const scheduleCreataed = await createScheduleService(scheduleData);

  res.status(201).json(scheduleCreataed);
};

export { createScheduleController };
