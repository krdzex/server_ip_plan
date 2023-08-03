import { ServerStatus } from "@prisma/client";
import { ValidationException } from "../../../logic/exceptions/validation.exception";

export class CreateServerDto {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly status: ServerStatus,
    public readonly ipPlanId: number
  ) {}

  static from(body: Partial<CreateServerDto>) {
    const errors: { [key: string]: string } = {};

    if (!body.name) {
      errors.name = "Name is required field";
    }

    if (!body.description) {
      errors.description = "Description is required field";
    }

    if (!body.status) {
      errors.status = "Status is required field";
    }

    if (!body.ipPlanId) {
      errors.planId = "Plan id is required field";
    }

    if (Object.keys(errors).length > 0) {
      throw new ValidationException(errors);
    }

    return new CreateServerDto(
      body.name || "",
      body.description || "",
      body.status || ServerStatus.OFFLINE,
      body.ipPlanId || 0
    );
  }
}
