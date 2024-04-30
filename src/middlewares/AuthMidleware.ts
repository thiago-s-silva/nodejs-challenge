import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface DecodedToken {
  userId: number;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Assuming token format "Bearer <token>"

  try {
    jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ error: "Invalid token" });
    } else {
      return res.status(500).json({ error: "Unexpected authentication error" });
    }
  }
};

export { authMiddleware };
