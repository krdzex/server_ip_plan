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
    } else if (body.name.length > 50) {
      errors.name = "Name cant be loner then 50 characters";
    }

    if (!body.description) {
      errors.description = "Description is required field";
    } else if (body.description.length > 1000) {
      errors.name = "Description cant be loner then 1000 characters";
    }

    if (!body.status) {
      errors.status = "Status is required field";
    } else if (
      body.status != ServerStatus.ONLINE ||
      body.status ||
      ServerStatus.OFFLINE
    ) {
      errors.status = "Status can only be offline or online";
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
