import { Product } from "../../../entities/Product";

interface IFactory {
  fabricId: number;
  products: Product[];
}

export interface IGetAllFactoriesResponse {
  total: number;
  fabricas: IFactory[];
}
