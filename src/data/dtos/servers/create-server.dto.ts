import { ServerStatus } from "@prisma/client";
import { ValidationException } from "../../../logic/services/exceptions/validation.exception";

export class CreateServerDto {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly status: ServerStatus,
    public readonly ipPlanId: number
  ) {}

  static from(body: Partial<CreateServerDto>) {
    if (!body.name) {
      throw new ValidationException("Name is required field");
    }

    if (!body.description) {
      throw new ValidationException("Description is required field");
    }

    if (!body.status) {
      throw new ValidationException("Status is required field");
    }

    if (!body.ipPlanId) {
      throw new ValidationException("Plan id is required field");
    }

    return new CreateServerDto(
      body.name,
      body.description,
      body.status,
      body.ipPlanId
    );
  }
}
