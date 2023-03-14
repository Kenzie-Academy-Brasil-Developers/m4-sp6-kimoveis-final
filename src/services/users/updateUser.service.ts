import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import {
  createUserSchemaReturn,
  userUpdateSchema,
} from "../../schemas/users.schemas";
import { IUserReturn, IUserUpdate } from "../../interfaces/users.interfaces";
import { AppError } from "../../errors";

const updateUserService = async (
  userData: IUserUpdate,
  userId: number,
  userInfo: any
): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userToUpdate = await userRepository.findOneBy({
    id: userId,
  });
  const bodyResquetesd: any = userUpdateSchema.parse(userData);

  console.log(userId, userInfo.id);
  if (userId !== userInfo.id) {
    if (!userInfo.admin) {
      throw new AppError("Insufficient permission", 403);
    }
  }

  const user = userRepository.create({
    ...userToUpdate,
    ...bodyResquetesd,
  });

  await userRepository.save(user);

  const updatedUser = createUserSchemaReturn.parse(user);

  return updatedUser;
};

export default updateUserService;
