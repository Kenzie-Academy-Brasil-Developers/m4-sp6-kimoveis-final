import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { createUserSchemaReturn } from "../../schemas/users.schemas";
import { IUserRequest, IUserReturn } from "../../interfaces/users.interfaces";

const createUserService = async (
  userData: IUserRequest
): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = userRepository.create(userData);

  await userRepository.save(user);

  const newUser = createUserSchemaReturn.parse(user);

  return newUser;
};

export default createUserService;
