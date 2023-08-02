import { NextFunction, Request, Response } from "express";
import { IpPlanService } from "../../logic/services/ip-plan.service";
import { CreateIpPlanDto } from "../../data/dtos/ip-plans/create-ip-plan.dto";

export class IpPlanController {
  constructor(private readonly ipPlanService: IpPlanService) {}

  async getIpPlanById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const server = await this.ipPlanService.getIpPlanById(id);

    return res.status(200).send(server);
  }

  async createIpPlan(req: Request, res: Response, next: NextFunction) {
    try {
      const server: CreateIpPlanDto = req.body;
      await this.ipPlanService.createIpPlan(server);
      res.status(201).json("Ip plan created");
    } catch (err) {
      next(err);
    }
  }
}
