import { IFactoriesRepository } from "../../repositories/IFactoriesRepository";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import {
  ICreateProductRequestDTO,
  ICreateProductResponseDTO,
} from "./CreateProductDTO";

export class CreateProductUseCase {
  constructor(
    private readonly productsRepository: IProductsRepository,
    private readonly factoriesRepository: IFactoriesRepository
  ) {}

  async execute(
    data: ICreateProductRequestDTO
  ): Promise<ICreateProductResponseDTO> {
    const { descripcion, existencias, fabrica, precio } = data;

    // Create the product factory
    const createdFactory = await this.factoriesRepository.create({
      descripcion: fabrica.descripcion,
    });

    if (createdFactory.id === undefined)
      throw new Error("Error creating product factory");

    // Create the product
    const createdProduct = await this.productsRepository.create({
      descripcion,
      existencias,
      idFab: createdFactory.id,
      precio,
    });

    return {
      status: true,
      payload: {
        id: +(createdProduct.id?.toString() || ""),
        descripcion: createdProduct.descripcion,
        existencias: createdProduct.existencias,
        precio: createdProduct.precio,
        idFab: +(createdProduct.idFab?.toString() || ""),
      },
    };
  }
}
