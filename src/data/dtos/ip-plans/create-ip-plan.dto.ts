export class CreateIpPlanDto {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly price: number
  ) {}

  static from(body: Partial<CreateIpPlanDto>) {
    if (!body.name) {
      throw new Error("");
    }

    if (!body.description) {
      throw new Error("");
    }

    if (!body.price) {
      throw new Error("");
    }

    return new CreateIpPlanDto(body.name, body.description, body.price);
  }
}
