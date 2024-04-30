import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { hashPassword } from "../../../utils";
import { CreateUserRequestDTO, CreateUserResponseDTO } from "./CreateUserDTO";
import crypto from "crypto";

export class CreateUserUseCase {
  constructor(private readonly UsersRepository: IUsersRepository) {}

  async execute(data: CreateUserRequestDTO): Promise<CreateUserResponseDTO> {
    const { email, password } = data;

    // Validate if the user already exists
    const userAlreadyExists = await this.UsersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const hashedPassowrd = hashPassword(password);

    await this.UsersRepository.create({
      email,
      password: hashedPassowrd,
      active: true,
    });

    return {
      status: true,
      message: "Successfuly created the user",
    };
  }
}
