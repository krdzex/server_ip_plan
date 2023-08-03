import { ServerStatus } from "@prisma/client";
import { ValidationException } from "@exceptions/custom-exceptions/validation.exception";

function isValidStatus(status: string): boolean {
  return Object.values(ServerStatus).includes(status as ServerStatus);
}

export class UpdateServerDto {
  constructor(
    public readonly name?: string,
    public readonly description?: string,
    public readonly status?: ServerStatus
  ) {}

  static from(body: Partial<UpdateServerDto>) {
    const errors: { [key: string]: string } = {};

    if (body.name && body.name.length > 50) {
      errors.name = "Name cant be loner then 50 characters";
    }

    if (body.description && body.description.length > 1000) {
      errors.description = "Description cant be loner then 1000 characters";
    }

    if (body.status && !isValidStatus(body.status)) {
      errors.status =
        "Status must be one of the following: " +
        Object.values(ServerStatus).join(", ");
    }

    if (Object.keys(errors).length > 0) {
      throw new ValidationException(errors);
    }
    return new UpdateServerDto(body.name, body.description, body.status);
  }
}
