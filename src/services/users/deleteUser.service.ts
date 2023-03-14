import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";

const deleteUserService = async (userId: number): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userToDelete = await userRepository.findOne({
    where: {
      id: userId,
    },
  });
  if (!userToDelete) {
    throw new AppError("User not found", 404);
  }

  await userRepository.softRemove(userToDelete);
};

export default deleteUserService;
