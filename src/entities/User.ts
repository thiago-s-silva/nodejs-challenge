export class User {
  public readonly id?: bigint;
  public email: string;
  public password: string;
  public active: boolean;

  constructor(props: Omit<User, "id">) {
    this.email = props.email;
    this.password = props.password;
    this.active = props.active;
  }
}
