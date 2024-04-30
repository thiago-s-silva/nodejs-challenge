import { Product } from "../../entities/Product";
import { IProductsRepository } from "../IProductsRepository";
import { PrismaClient } from "@prisma/client";

export class PostgresProductsRepository implements IProductsRepository {
  constructor(private readonly prisma: PrismaClient) {
    this.prisma = new PrismaClient();
  }

  async create(product: Product): Promise<Product> {
    const createdProduct = await this.prisma.product.create({
      data: {
        descripcion: product.descripcion,
        existencias: product.existencias,
        precio: product.precio,
        idFab: product.idFab,
      },
    });

    return {
      id: +createdProduct.id.toString(),
      descripcion: createdProduct.descripcion,
      existencias: +createdProduct.existencias.toString(),
      precio: createdProduct.precio,
      idFab: +createdProduct.idFab.toString(),
    };
  }
}
