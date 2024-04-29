export class Factory {
  public readonly id?: number | null;
  public readonly name: string;

  constructor(name: string, id?: number | null) {
    this.name = name;
  }
}
