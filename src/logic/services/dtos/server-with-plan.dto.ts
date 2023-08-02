import { ServerStatus } from "@prisma/client"
import { IServer } from "../../../data/models/server.model"

export class ServerWithPlanDto {
  constructor(
    public readonly id: Number,
    public readonly name: String,
    public readonly description: String,
    public readonly status: ServerStatus
  ) {}

  static from(entity: IServer) {
    return new ServerWithPlanDto(
      entity.id,
      entity.name,
      entity.description,
      entity.status
    )
  }
}
