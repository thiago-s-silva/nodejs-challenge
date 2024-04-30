import { User } from "../entities/User";

export interface IUsersRepository {
  create(data: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
