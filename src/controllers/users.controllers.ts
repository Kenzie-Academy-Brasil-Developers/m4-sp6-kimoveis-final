import { Request, Response } from "express";
import { AppError } from "../errors";
import { IUserRequest, IUserUpdate } from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import readAllUsersService from "../services/users/readAllUsers.service";
import updateUserService from "../services/users/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;

  const userCreataed = await createUserService(userData);

  res.status(201).json(userCreataed);
};

const readAllUsersController = async (req: Request, res: Response) => {
  if (req.user.admin === false) {
    throw new AppError("Insufficient permission", 403);
  }
  const allUsers = await readAllUsersService();

  res.json(allUsers);
};

const updateUserController = async (req: Request, res: Response) => {
  const userData: IUserUpdate = req.body;
  const userId = parseInt(req.params.id);

  const allUsers = await updateUserService(userData, userId, req.user);

  res.json(allUsers);
};

const deleteUserController = async (req: Request, res: Response) => {
  if (req.user.admin === false) {
    throw new AppError("Insufficient permission", 403);
  }
  const userId = parseInt(req.params.id);

  await deleteUserService(userId);

  res.status(204).send();
};

export {
  createUserController,
  readAllUsersController,
  updateUserController,
  deleteUserController,
};
