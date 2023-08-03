import { ValidationException } from "../../../logic/exceptions/custom-exceptions/validation.exception";

export class UpdateIpPlanDto {
  constructor(
    public readonly name?: string,
    public readonly description?: string,
    public readonly price?: number
  ) {}
  static from(body: Partial<UpdateIpPlanDto>) {
    const errors: { [key: string]: string } = {};

    if (body.name && body.name.length > 50) {
      errors.name = "Name cant be loner then 50 characters";
    }

    if (body.description && body.description.length > 1000) {
      errors.description = "Description cant be loner then 1000 characters";
    }

    if (body.price && body.price < 0) {
      errors.price = "Price cant be smaller then 0";
    }

    if (Object.keys(errors).length > 0) {
      throw new ValidationException(errors);
    }

    return new UpdateIpPlanDto(body.name, body.description, body.price);
  }
}
