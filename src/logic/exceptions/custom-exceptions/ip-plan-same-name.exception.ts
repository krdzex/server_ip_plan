import { BadRequest } from "../base-exceptions/bad-request.exception";

export class IpPlanSameNameException extends BadRequest {
  constructor(name: string) {
    super(`Ip plan with name: ${name} already exist!`);
  }
}
