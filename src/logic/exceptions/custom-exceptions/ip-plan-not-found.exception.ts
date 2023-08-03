import { NotFoundException } from "../base-exceptions/not-found.exception";

export class IpPlanNotFoundException extends NotFoundException {
  constructor(id: number) {
    super(`Ip plan with id: ${id} is not found!`);
  }
}
