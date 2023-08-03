import { ValidationException } from "../../../logic/exceptions/validation.exception";

export class CreateIpPlanDto {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly price: number
  ) {}

  static from(body: Partial<CreateIpPlanDto>) {
    const errors: { [key: string]: string } = {};

    if (!body.name) {
      errors.name = "Name is required field";
    }

    if (!body.description) {
      errors.description = "Description is required field";
    }

    if (!body.price) {
      errors.description = "Description is required field";
    }

    if (Object.keys(errors).length > 0) {
      throw new ValidationException(errors);
    }

    return new CreateIpPlanDto(
      body.name || "",
      body.description || "",
      body.price || 0
    );
  }
}
