import { Request, Response } from "express";
import { IRealStateRequest } from "../interfaces/realState.interfaces";
import createRealEstateService from "../services/realState/createRealState.service";
import readAllRealStatesService from "../services/realState/readAllRealStates.service";

const createRealStateController = async (req: Request, res: Response) => {
  const realStateData: IRealStateRequest = req.body;

  const realStateCreataed = await createRealEstateService(realStateData);

  res.status(201).json(realStateCreataed);
};

const readAllRealStatesController = async (req: Request, res: Response) => {
  const allUsers = await readAllRealStatesService();

  res.json(allUsers);
};

export { createRealStateController, readAllRealStatesController };
