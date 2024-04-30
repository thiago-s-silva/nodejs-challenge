import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env fileconst app: Express = express();

export const PORT: number = +(process.env.PORT || 3000);

interface IPostgresConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}
export const getPostgresConfig = (): IPostgresConfig => {
  const user = process.env.POSTGRES_USER;
  const password = process.env.POSTGRES_PASSWORD;
  const host = process.env.POSTGRES_HOST;
  const port = process.env.POSTGRES_PORT;
  const database = process.env.POSTGRES_DB;

  if (
    user === undefined ||
    password === undefined ||
    host === undefined ||
    port === undefined ||
    database === undefined
  ) {
    throw new Error("Missing environment variables for Postgres");
  }

  return {
    host,
    port: +port,
    username: user,
    password,
    database,
  };
};
