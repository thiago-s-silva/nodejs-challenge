import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import {
  ICreateProductRequestDTO,
  ICreateProductResponseDTO,
} from "./CreateProductDTO";

export class CreateProductUseCase {
  constructor(private readonly productsRepository: IProductsRepository) {}

  async execute(
    data: ICreateProductRequestDTO
  ): Promise<ICreateProductResponseDTO> {}
}
