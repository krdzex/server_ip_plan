import { BadRequest } from "../base-exceptions/bad-request.exception";

export class ServerSameNameException extends BadRequest {
  constructor(name: string) {
    super(`Server with name: ${name} already exist!`);
  }
}
