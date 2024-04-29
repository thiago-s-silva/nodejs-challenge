import { Product } from "../entities/Product";

export interface IProductsRepository {
  create(product: Product): Promise<Product>;
  findAll(): Promise<Product[]>;
  deleteById(id: string): Promise<void>;
}
