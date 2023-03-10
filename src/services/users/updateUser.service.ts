import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { createUserSchemaReturn } from "../../schemas/users.schemas";
import { IUserReturn, IUserUpdate } from "../../interfaces/users.interfaces";

const updateUserService = async (
  userData: any,
  userId: number
): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userToUpdate = await userRepository.findOneBy({
    id: userId,
  });

  const user = userRepository.create({
    ...userToUpdate,
    ...userData,
  });

  await userRepository.save(user);

  const updatedUser = createUserSchemaReturn.parse(user);

  return updatedUser;
};

export default updateUserService;
