import { IUsersRepository } from "../../repositories/IUsersRepository";
import { generateToken, hashPassword } from "../../utils";

export default class AuthenticateUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(email: string, password: string) {
    // Check if the user exists on the database
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    // Check if the password is correct using crypto
    const hashedPassowrd = hashPassword(password);

    // Compare the passwords
    if (hashedPassowrd !== user.password) {
      throw new Error("Invalid password");
    }

    // Generate a token
    const token = generateToken({ id: user.id?.toString() });

    // Return the token
    return { token };
  }
}
