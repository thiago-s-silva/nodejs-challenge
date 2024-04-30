import { Product } from "../entities/Product";

export interface IProductsRepository {
  create(product: Product): Promise<Product>;
}
