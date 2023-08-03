import { NextFunction, Request, Response } from "express";
import { ValidationException } from "../../logic/exceptions/validation.exception";
import { BaseHttpResponse } from "../base-http-response";
import { ServerNotFoundException } from "../../logic/exceptions/server-not-found.exception";
import { IpPlanNotFoundException } from "../../logic/exceptions/ip-plan-not-found.exception";

const ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ValidationException) {
    const response = BaseHttpResponse.failed(err.message, 422);
    return res.status(response.statusCode).json(response);
  }

  if (err instanceof ServerNotFoundException) {
    const response = BaseHttpResponse.failed(err.message, 404);
    return res.status(response.statusCode).json(response);
  }

  if (err instanceof IpPlanNotFoundException) {
    const response = BaseHttpResponse.failed(err.message, 404);
    return res.status(response.statusCode).json(response);
  }

  next();
};

export default ErrorHandler;
