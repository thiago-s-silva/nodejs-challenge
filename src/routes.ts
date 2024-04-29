import { Router } from "express";
import { createProductController } from "./useCases/CreateProduct";

const router = Router();

router.post("/api/v1/products", (req, res) => {
  return createProductController.handle(req, res);
});

export { router };
