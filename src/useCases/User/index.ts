import { PrismaSingleton } from "../../databases/prisma";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUser/CreateUserController";
import { CreateUserUseCase } from "./CreateUser/CreateUserUseCase";

const prisma = new PrismaSingleton().getInstance();

const usersRepository = new PostgresUsersRepository(prisma);

const createUserUseCase = new CreateUserUseCase(usersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
