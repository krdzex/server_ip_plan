import { NextFunction, Request, Response } from "express";
import { ValidationException } from "@exceptions/custom-exceptions/validation.exception";
import { BaseHttpResponse } from "../base-http-response";
import { NotFoundException } from "@exceptions/base-exceptions/not-found.exception";
import { BadRequest } from "@exceptions/base-exceptions/bad-request.exception";

const ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ValidationException) {
    const response = BaseHttpResponse.validationFailed(err.message, err.errors);
    return res
      .status(response.statusCode)
      .json({ msg: response.msg, errors: response.errors });
  }

  if (err instanceof NotFoundException) {
    const response = BaseHttpResponse.failed(err.message, 404);
    return res.status(response.statusCode).json({ msg: response.msg });
  }

  if (err instanceof BadRequest) {
    const response = BaseHttpResponse.failed(err.message, 400);
    return res.status(response.statusCode).json({ msg: response.msg });
  }

  if (err instanceof Error) {
    const response = BaseHttpResponse.failed("Internal server error", 500);
    return res.status(response.statusCode).json({ msg: response.msg });
  }

  next();
};

export default ErrorHandler;
