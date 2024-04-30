import { IProductsRepository } from "../../repositories/IProductsRepository";

export class DeleteProductUseCase {
  constructor(private readonly productRepository: IProductsRepository) {}

  async execute(productId: number) {
    const product = await this.productRepository.findById(productId);

    if (!product) {
      return {
        status: false,
        message: "The product was not found with the given id",
      };
    }

    await this.productRepository.deleteById(productId);

    return { status: true, message: "Successfuly deleted the product by id" };
  }
}
