import { Request, Response } from "express";
import { AppError } from "../errors";
import { IRealStateRequest } from "../interfaces/realState.interfaces";
import createRealStateService from "../services/realState/createRealState.service";
import readAllRealStatesService from "../services/realState/readAllRealStates.service";

const createRealStateController = async (req: Request, res: Response) => {
  // if (req.user.admin === "false") {
  //   throw new AppError("only admins can create a real State", 403);
  // }

  const realStateData: IRealStateRequest = req.body;

  const realStateCreataed = await createRealStateService(realStateData);

  res.status(201).json(realStateCreataed);
};

const readAllRealStatesController = async (req: Request, res: Response) => {
  const allUsers = await readAllRealStatesService();

  res.json(allUsers);
};

export { createRealStateController, readAllRealStatesController };
