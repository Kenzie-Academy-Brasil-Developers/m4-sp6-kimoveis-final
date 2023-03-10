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

//TODO:
//SO ADMIN PODE LER TODOS OS USERS
//ADMIN PODE ALTERAR TODO MUNDO
//NAOADMIN SO PODE ALTERAR ELE MESMO
//SO ADMIN PODE DELETAR
//NAO DELETAR USUARIO JA DELETADO
//DEVE RETORNAR O DELETEDAT DO USER DELETADO
//PATCH PERMITIR MANDAR MESMO EMAIL DESDE QUE SEJA DO MESMO USER

userRoutes.post(
  "",
  ensureDataIsValidMiddleWare(createUserSchema),
  ensureEmailIsUniqueMiddleware,
  createUserController
);
userRoutes.get("", ensureTokenIsValidMiddleware, readAllUsersController);
userRoutes.patch(
  "/:id",
  ensureEmailIsUniqueMiddleware,
  ensureUserExistsMiddleWare,
  updateUserController
);
userRoutes.delete("/:id", ensureUserExistsMiddleWare, deleteUserController);

export default userRoutes;
