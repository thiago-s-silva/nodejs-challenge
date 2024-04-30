import { Factory } from "../entities/Factory";

export interface IFactoriesRepository {
  create(factory: Factory): Promise<Factory>;
  getAllWithProducts(): Promise<Factory[]>;
}
