/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date()
    });

    this.users.push(user);

    return user
  }

  findById(user_id: string): User | undefined {
    // Complete aqui
    const user = this.users.find((c) => c.id === user_id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const user = this.users.find((c) => c.email === email);
    return user;
  }

  turnAdmin(user: User): User {
    // Complete aqui
    const newUser = user;
    newUser.admin = true
    newUser.updated_at = new Date();

    return newUser
  }

  list(): User[] {
    // Complete aqui
    return this.users
  }
}

export { UsersRepository };
