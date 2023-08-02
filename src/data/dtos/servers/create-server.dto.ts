import { ServerStatus } from "@prisma/client";

export class CreateServerDto {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly status: ServerStatus,
    public readonly ipPlanId: number
  ) {}

  static from(body: Partial<CreateServerDto>) {
    if (!body.name) {
      throw new Error("");
    }

    if (!body.description) {
      throw new Error("");
    }

    if (!body.status) {
      throw new Error("");
    }

    if (!body.ipPlanId) {
      throw new Error("");
    }

    return new CreateServerDto(
      body.name,
      body.description,
      body.status,
      body.ipPlanId
    );
  }
}
