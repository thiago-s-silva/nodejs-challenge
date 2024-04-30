import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class PrismaSingleton {
  public instance: PrismaClient;

  constructor() {
    this.instance = prisma;
  }

  public getInstance(): PrismaClient {
    if (!this.instance) {
      this.instance = new PrismaClient();
    }
    return this.instance;
  }
}

export { PrismaSingleton };
