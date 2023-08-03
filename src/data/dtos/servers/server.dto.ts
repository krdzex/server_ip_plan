import { ServerStatus } from "@prisma/client";

export class ServerDto {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
    public readonly status: ServerStatus
  ) {}
}
