/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IUserId {
  user_id: string;
}


class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IUserId): User[] {
    // Complete aqui
    const userExists =
      this.usersRepository.findById(user_id);

    const userIsAdmin = userExists ? userExists.admin : false

    if (!userExists || !userIsAdmin) {
      throw new Error('User do not exists or is not admin!');
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
