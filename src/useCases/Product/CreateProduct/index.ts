import { PostgresProductsRepository } from "../../../repositories/implementations/PostgresProductsRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";
import { PrismaSingleton } from "../../../databases/prisma";
import { PostgresFactoriesRepository } from "../../../repositories/implementations/PostgresFactoriesRepository";

const prisma = new PrismaSingleton().getInstance();

const postgresProductsRepository = new PostgresProductsRepository(prisma);
const postgresFactoriesRepository = new PostgresFactoriesRepository(prisma);

const createProductUseCase = new CreateProductUseCase(
  postgresProductsRepository,
  postgresFactoriesRepository
);

const createProductController = new CreateProductController(
  createProductUseCase
);

export { createProductController };
