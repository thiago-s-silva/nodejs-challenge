import { Router } from "express";
import { createProductController } from "./useCases/CreateProduct";
import { getAllFactoriesController } from "./useCases/GetAllFactories";
import { deleteProductController } from "./useCases/DeleteProduct";

const router = Router();

/*** PRODUCTS ****/
// Create a new product and factory
router.post("/api/v1/products", (req, res) => {
  return createProductController.handle(req, res);
});
// Delete a product by id
router.delete("/api/v1/products/:id", (req, res) => {
  return deleteProductController.handle(req, res);
});

/*** FACTORIES ****/
// Get all factories with their products
router.get("/api/v1/factories", (req, res) => {
  return getAllFactoriesController.handle(req, res);
});

export { router };
