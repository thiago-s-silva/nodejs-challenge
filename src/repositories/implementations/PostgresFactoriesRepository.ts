import { PrismaClient } from "@prisma/client";
import { Factory } from "../../entities/Factory";
import { IFactoriesRepository } from "../IFactoriesRepository";

export class PostgresFactoriesRepository implements IFactoriesRepository {
  constructor(private readonly prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async create(factory: Factory): Promise<Factory> {
    const createdFactory = await this.prisma.factory.create({
      data: {
        id: factory.id,
        descripcion: factory.descripcion,
      },
    });

    return {
      id: +createdFactory.id.toString(),
      descripcion: createdFactory.descripcion,
    };
  }

  async getAllWithProducts(): Promise<Factory[]> {
    const factories = await this.prisma.factory.findMany({
      include: { Product: true },
    });

    return factories.map((factory) => {
      return {
        id: +factory.id.toString(),
        descripcion: factory.descripcion,
        products: factory.Product.map((product) => {
          return {
            id: +product.id.toString(),
            descripcion: product.descripcion,
            precio: product.precio,
            existencias: +product.existencias.toString(),
            idFab: +factory.id.toString(),
          };
        }),
      };
    });
  }
}
