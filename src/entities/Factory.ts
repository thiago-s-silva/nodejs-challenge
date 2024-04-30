import { Product } from "./Product";

export class Factory {
  public readonly id?: number;
  public readonly descripcion: string;
  public readonly products?: Product[];

  constructor(description: string) {
    this.descripcion = description;
  }
}
