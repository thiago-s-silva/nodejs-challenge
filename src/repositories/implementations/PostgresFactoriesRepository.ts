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
}
