import { PrismaSingleton } from "../../../databases/prisma";
import { PostgresFactoriesRepository } from "../../../repositories/implementations/PostgresFactoriesRepository";
import GetAllFactoriesController from "./GetAllFactoriesController";
import { GetAllFactoriesUseCase } from "./GetAllFactoriesUseCase";

const prisma = new PrismaSingleton().getInstance();

const postgresFactoriesRepository = new PostgresFactoriesRepository(prisma);

const getAllFactoriesUseCase = new GetAllFactoriesUseCase(
  postgresFactoriesRepository
);

const getAllFactoriesController = new GetAllFactoriesController(
  getAllFactoriesUseCase
);

export { getAllFactoriesController };
