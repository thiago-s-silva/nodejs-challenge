import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env fileconst app: Express = express();

export const PORT: number = +(process.env.PORT || 3000);
