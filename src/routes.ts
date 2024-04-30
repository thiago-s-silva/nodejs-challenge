import { Router } from "express";
import { createProductController } from "./useCases/Product/CreateProduct";
import { getAllFactoriesController } from "./useCases/Factory/GetAllFactories";
import { deleteProductController } from "./useCases/Product/DeleteProduct";
import { createUserController } from "./useCases/User";
import { authMiddleware } from "./middlewares/AuthMidleware";
import { authenticateController } from "./useCases/Authentication";

const router = Router();

/*** AUTHENTICATION ****/
router.post("/api/v1/authentication", (req, res) => {
  return authenticateController.handle(req, res);
});

/*** USERS ****/
router.post("/api/v1/users", (req, res) => {
  return createUserController.handle(req, res);
});

/*** PRODUCTS ****/
// Create a new product and factory
router.post("/api/v1/products", authMiddleware, (req, res) => {
  return createProductController.handle(req, res);
});
// Delete a product by id
router.delete("/api/v1/products/:id", authMiddleware, (req, res) => {
  return deleteProductController.handle(req, res);
});

/*** FACTORIES ****/
// Get all factories with their products
router.get("/api/v1/factories", authMiddleware, (req, res) => {
  return getAllFactoriesController.handle(req, res);
});

export { router };
