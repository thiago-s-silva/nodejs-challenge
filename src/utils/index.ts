import jwt from "jsonwebtoken";
import crypto from "crypto";

export function generateToken(payload: object): string {
  const token = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  return token;
}

export function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}
