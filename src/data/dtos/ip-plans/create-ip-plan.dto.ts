import { ValidationException } from "../../../logic/exceptions/validation.exception";

export class CreateIpPlanDto {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly price: number
  ) {}

  static from(body: Partial<CreateIpPlanDto>) {
    if (!body.name) {
      throw new ValidationException("Name is required");
    }

    if (!body.description) {
        throw new ValidationException("Description is required");
    }

    if (!body.price) {
        throw new ValidationException("Price is required");
    }

    return new CreateIpPlanDto(body.name, body.description, body.price);
  }
}
