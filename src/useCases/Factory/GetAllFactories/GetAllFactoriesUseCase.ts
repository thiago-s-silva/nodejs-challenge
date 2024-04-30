import { IFactoriesRepository } from "../../../repositories/IFactoriesRepository";

export class GetAllFactoriesUseCase {
  constructor(private factoriesRepository: IFactoriesRepository) {}

  async execute() {
    const factories = await this.factoriesRepository.getAllWithProducts();

    const response = factories.map((f) => ({
      fabricId: f.id,
      products: f.products,
    }));

    return response;
  }
}
