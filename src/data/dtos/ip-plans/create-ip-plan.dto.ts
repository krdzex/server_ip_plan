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
    } else if (body.name.length > 50) {
      errors.name = "Name cant be loner then 50 characters";
    }

    if (!body.description) {
      errors.description = "Description is required field";
    } else if (body.description.length > 1000) {
      errors.description = "Description cant be loner then 1000 characters";
    }

    if (!body.price) {
      errors.price = "Price is required field";
    } else if (body.price < 0) {
      errors.price = "Price cant be smaller then 0";
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
