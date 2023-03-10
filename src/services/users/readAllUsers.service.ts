import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { IAllUsersReturn } from "../../interfaces/users.interfaces";

const readAllUsersService = async (): Promise<IAllUsersReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: IAllUsersReturn = await userRepository.find();

  return findUser;
};

export default readAllUsersService;
