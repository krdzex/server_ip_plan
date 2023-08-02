import { ServerStatus } from "@prisma/client"

export class ServerWithPlanDto {
  constructor(
    public readonly id: Number,
    public readonly name: String,
    public readonly description: String,
    public readonly status: ServerStatus
  ) {}
}
