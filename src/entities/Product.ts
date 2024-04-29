export class Product {
  public readonly id?: number | null;
  public descripcion: string;
  public precio: number;
  public existencias: number;
  public idFab: number;

  constructor(props: Omit<Product, "id">, id?: number) {
    this.descripcion = props.descripcion;
    this.precio = props.precio;
    this.existencias = props.existencias;
    this.idFab = props.idFab;
  }
}
