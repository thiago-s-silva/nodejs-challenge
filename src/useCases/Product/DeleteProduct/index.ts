import { PrismaSingleton } from "../../../databases/prisma";
import { PostgresProductsRepository } from "../../../repositories/implementations/PostgresProductsRepository";
import { DeleteProductController } from "./DeleteProductController";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

const prisma = new PrismaSingleton().getInstance();

const postgresProductsRepository = new PostgresProductsRepository(prisma);

const deleteProductUseCase = new DeleteProductUseCase(
  postgresProductsRepository
);

const deleteProductController = new DeleteProductController(
  deleteProductUseCase
);

export { deleteProductController };
