import { PostgresProductsRepository } from "../../repositories/implementations/PostgresProductsRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

const postgresProductsRepository = new PostgresProductsRepository();

const createProductUseCase = new CreateProductUseCase(
  postgresProductsRepository
);

const createProductController = new CreateProductController(
  createProductUseCase
);

export { createProductUseCase, createProductController };
