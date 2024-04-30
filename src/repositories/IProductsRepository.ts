import { Product } from "../entities/Product";

export interface IProductsRepository {
  create(product: Product): Promise<Product>;
  findById(id: number): Promise<Product | null>;
  deleteById(id: number): Promise<void>;
}
