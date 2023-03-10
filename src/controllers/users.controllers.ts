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
  const allUsers = await readAllUsersService();

  console.log(req.user.admin);
  if (req.user.admin === "false") {
    throw new AppError("only admins can read all the users", 403);
  }

  res.json(allUsers);
};

const updateUserController = async (req: Request, res: Response) => {
  const userData: IUserUpdate = req.body;
  const userId = parseInt(req.params.id);

  const allUsers = await updateUserService(userData, userId);

  res.json(allUsers);
};

const deleteUserController = async (req: Request, res: Response) => {
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
