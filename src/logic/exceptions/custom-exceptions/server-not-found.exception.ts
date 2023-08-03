import { NotFoundException } from "../base-exceptions/not-found.exception";

export class ServerNotFoundException extends NotFoundException {
    constructor(id: number) {
      super(`Server with id: ${id} is not found!`)
    }
  }
  