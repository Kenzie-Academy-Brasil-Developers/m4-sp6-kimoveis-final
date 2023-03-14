import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readAllUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureTokenIsValidMiddleware from "../middlewares/login/ensureTokenIsValid.middleware";
import ensureDataIsValidMiddleWare from "../middlewares/user/ensureDataIsValid.middlewares";
import ensureEmailIsUniqueMiddleware from "../middlewares/user/ensureEmailIsUnique.middleware";
import ensureUserExistsMiddleWare from "../middlewares/user/ensureUserExists.middleware";
import { createUserSchema } from "../schemas/users.schemas";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleWare(createUserSchema),
  ensureEmailIsUniqueMiddleware,
  createUserController
);
userRoutes.get("", ensureTokenIsValidMiddleware, readAllUsersController);
userRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureEmailIsUniqueMiddleware,
  ensureUserExistsMiddleWare,
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureUserExistsMiddleWare,
  deleteUserController
);

export default userRoutes;
