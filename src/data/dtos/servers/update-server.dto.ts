import { ServerStatus } from "@prisma/client";

export class ServerUpdateDto {
  constructor(
    public readonly name?: string,
    public readonly description?: string,
    public readonly status?: ServerStatus
  ) {}

  static from(body: Partial<ServerUpdateDto>) {
    return new ServerUpdateDto(body.name, body.description, body.status);
  }
}