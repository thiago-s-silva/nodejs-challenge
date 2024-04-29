import { Product } from "../../entities/Product";
import { IProductsRepository } from "../IProductsRepository";

export class PostgresProductsRepository implements IProductsRepository {
  async create(product: Product): Promise<Product> {
    return product;
  }

  async deleteById(id: string): Promise<void> {
    return;
  }

  async findAll(): Promise<Product[]> {
    return [
      new Product({
        descripcion: "test",
        existencias: 10,
        idFab: 1,
        precio: 10.5,
      }),
    ];
  }
}
