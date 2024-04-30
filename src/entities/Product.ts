export class Product {
  public readonly id?: number;
  public descripcion: string;
  public precio: number;
  public existencias: number;
  public idFab: number;

  constructor(props: Omit<Product, "id">) {
    this.descripcion = props.descripcion;
    this.precio = props.precio;
    this.existencias = props.existencias;
    this.idFab = props.idFab;
  }
}
