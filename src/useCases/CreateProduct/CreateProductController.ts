import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";
import { ICreateProductRequestDTO } from "./CreateProductDTO";
import { CreateProductSchema } from "./CreateProductSchema";

export class CreateProductController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) {}

  async handle(request: Request, Response: Response): Promise<Response> {
    const payload: ICreateProductRequestDTO = request.body;

    const { error } = await CreateProductSchema.validate(payload);

    if (error) {
      console.error(`Payload validation error: ${error}`);

      return Response.status(400).json({
        message: "Missing information",
      });
    }

    try {
      const product = await this.createProductUseCase.execute(payload);

      return Response.status(201).json(product);
    } catch (error: any) {
      return Response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
