import { Request, Response } from "express";
import AuthenticateUseCase from "./AuthenticateUseCase";
import { AuthenticateSchema } from "./AuthenticateSchema";

export default class AuthenticateController {
  constructor(private readonly authenticateUseCase: AuthenticateUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const { error } = AuthenticateSchema.validate(request.body);

    if (error) {
      return response.status(400).json({
        message: error.message,
      });
    }

    try {
      const authentication = await this.authenticateUseCase.execute(
        email,
        password
      );

      return response.status(200).json(authentication);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
