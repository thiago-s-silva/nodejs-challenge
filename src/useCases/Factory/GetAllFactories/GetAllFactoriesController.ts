import { Request, Response } from "express";
import { GetAllFactoriesUseCase } from "./GetAllFactoriesUseCase";

export default class GetAllFactoriesController {
  constructor(
    private readonly GetAllFactoriesUseCase: GetAllFactoriesUseCase
  ) {}

  async handle(request: Request, Response: Response): Promise<Response> {
    try {
      const factories = await this.GetAllFactoriesUseCase.execute();

      return Response.status(200).json(factories);
    } catch (error: any) {
      console.error(`[GetAllFactories] Unexpected error: ${error}`);

      return Response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
