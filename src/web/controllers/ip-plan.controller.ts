import { Request, Response } from "express";
import { IpPlanService } from "../../logic/services/ip-plan.service";

export class IpPlanController {
  constructor(private readonly ipPlanService: IpPlanService) {}

  async getIpPlanById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const server = await this.ipPlanService.getIpPlanById(id);

    return res.status(200).send(server);
  }
}
