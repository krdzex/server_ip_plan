export class ServerNotFoundException extends Error {
    constructor(id: number) {
      super(`Server with id: ${id} is not found!`)
    }
  }
  