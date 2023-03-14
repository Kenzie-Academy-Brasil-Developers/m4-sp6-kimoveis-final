import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readAllUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureTokenIsValidMiddleware from "../middlewares/login/ensureTokenIsValid.middleware";
import ensureDataIsValidMiddleWare from "../middlewares/ensureDataIsValid.middlewares";
import ensureEmailIsUniqueMiddleware from "../middlewares/user/ensureEmailIsUnique.middleware";
import ensureUserExistsMiddleWare from "../middlewares/user/ensureUserExists.middleware";
import { createUserSchema } from "../schemas/users.schemas";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middleware";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleWare(createUserSchema),
  ensureEmailIsUniqueMiddleware,
  createUserController
);
userRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureUserIsAdminMiddleware,
  readAllUsersController
);
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
  ensureUserIsAdminMiddleware,
  deleteUserController
);

export default userRoutes;
