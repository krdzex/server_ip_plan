import { NextFunction, Request, Response } from "express";
import { IpPlanService } from "../../logic/services/ip-plan.service";
import { CreateIpPlanDto } from "../../data/dtos/ip-plans/create-ip-plan.dto";
import { UpdateIpPlanDto } from "../../data/dtos/ip-plans/update-ip-plan.dto";

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
      res.status(201).json({ message: "Ip plan created" });
    } catch (err) {
      next(err);
    }
  }

  async updateIpPlan(req: Request, res: Response, next: NextFunction) {
    try {
      const serverUpdate: UpdateIpPlanDto = req.body;
      const { id } = req.params;
      await this.ipPlanService.updateIpPlan(Number(id), serverUpdate);
      res.status(200).json({ message: "Ip plan updated successfully" });
    } catch (err) {
      next(err);
    }
  }

  async deleteIpPlan(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await this.ipPlanService.deleteIpPlan(Number(id));
      res.status(200).json({ message: "Ip plan deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
}
