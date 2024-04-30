import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserSchema } from "./CreateUserSchema";

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, Response: Response): Promise<Response> {
    const { email, password } = request.body;

    const { error } = CreateUserSchema.validate(request.body);

    if (error) {
      return Response.status(400).json({
        message: error.message,
      });
    }

    try {
      const response = await this.createUserUseCase.execute({
        email,
        password,
      });

      return Response.status(201).send(response);
    } catch (err: any) {
      return Response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
