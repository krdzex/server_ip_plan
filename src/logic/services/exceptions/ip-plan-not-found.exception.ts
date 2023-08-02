export class IpPlanNotFoundException extends Error {
    constructor(id: number) {
      super(`Ip plan with id: ${id} is not found!`)
    }
  }
  