import { NextFunction, Request, Response } from "express";
import { codes } from "./settings";

/**
 * Handles all application's uncached errors
 */
export function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  return response.status(codes.SERVER_ERROR).send({
    name: error.name,
    message: error.message,
  });
}
