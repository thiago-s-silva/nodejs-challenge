import { Router } from "express";
import { createProductController } from "./useCases/CreateProduct";
import { getAllFactoriesController } from "./useCases/GetAllFactories";

const router = Router();

router.post("/api/v1/products", (req, res) => {
  return createProductController.handle(req, res);
});

router.get("/api/v1/factories", (req, res) => {
  return getAllFactoriesController.handle(req, res);
});

export { router };
