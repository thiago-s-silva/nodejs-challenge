import { Product } from "../../entities/Product";

export interface ICreateProductRequestDTO {
  descripcion: string;
  precio: number;
  existencias: number;
  fabrica: {
    nombre: string;
    descripcion: string;
  };
}

export interface ICreateProductResponseDTO {
  status: boolean;
  product: Product;
}
