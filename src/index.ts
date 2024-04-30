import express, { Express, Request, Response } from "express";
import { PORT } from "./config";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from your Express and TypeScript server!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
