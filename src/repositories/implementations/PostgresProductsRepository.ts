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

  async findById(id: number): Promise<Product | null> {
    const product = await this.prisma.product.findFirst({ where: { id } });

    if (!product) return null;

    return {
      id: +product.id.toString(),
      descripcion: product.descripcion,
      existencias: +product.existencias.toString(),
      precio: +product.precio.toString(),
      idFab: +product.idFab.toString(),
    };
  }

  async deleteById(id: number): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }
}
