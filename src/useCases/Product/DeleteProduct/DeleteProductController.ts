import { Request, Response } from "express";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

export class DeleteProductController {
  constructor(private readonly deleteProductUseCase: DeleteProductUseCase) {}

  async handle(request: Request, Response: Response): Promise<Response> {
    try {
      // Get the product id from url parameter
      const productId = request.params.id;

      if (!productId) {
        return Response.status(400).json({
          message: "Product id is required.",
        });
      }

      const response = await this.deleteProductUseCase.execute(+productId);

      return Response.status(200).json(response);
    } catch (error: any) {
      console.error(`[DeleteProduct] Unexpected error: ${error}`);

      return Response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
