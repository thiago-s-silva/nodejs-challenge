import { PrismaSingleton } from "../../databases/prisma";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import AuthenticateUseCase from "./AuthenticateUseCase";
import AuthenticateController from "./AuthenticationController";

const prisma = new PrismaSingleton().getInstance();

const usersRepository = new PostgresUsersRepository(prisma);

const authenticateUseCase = new AuthenticateUseCase(usersRepository);

const authenticateController = new AuthenticateController(authenticateUseCase);

export { authenticateController };
