import { ServerStatus } from "@prisma/client";

export class UpdateServerDto {
  constructor(
    public readonly name?: string,
    public readonly description?: string,
    public readonly status?: ServerStatus
  ) {}

  static from(body: Partial<UpdateServerDto>) {
    return new UpdateServerDto(body.name, body.description, body.status);
  }
}