import { Request, Response } from "express";
import { AppError } from "../errors";
import { IScheduleRequest } from "../interfaces/schedules.interfaces";
import createScheduleService from "../services/schedules/createSchedule.service";
import { readScheduleService } from "../services/schedules/readSchedule.service";

const createScheduleController = async (req: Request, res: Response) => {
  const scheduleData: IScheduleRequest = req.body;

  const scheduleCreataed = await createScheduleService(scheduleData, req.user);

  res.status(201).json(scheduleCreataed);
};

const readScheduleController = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  if (!req.user.admin) {
    throw new AppError("Insufficient permission", 403);
  }
  const id = Number(req.params.id);

  const scheduleRealEstate = await readScheduleService(id);

  return resp.status(200).json(scheduleRealEstate);
};

export { createScheduleController, readScheduleController };
