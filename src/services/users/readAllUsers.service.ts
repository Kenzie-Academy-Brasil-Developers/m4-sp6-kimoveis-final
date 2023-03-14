import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { IAllUsersReturn } from "../../interfaces/users.interfaces";
import { allUsersSchema } from "../../schemas/users.schemas";

const readAllUsersService = async (): Promise<IAllUsersReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: IAllUsersReturn = await userRepository.find();
  const newUsersArray = allUsersSchema.parse(findUser);

  return newUsersArray;
};

export default readAllUsersService;
