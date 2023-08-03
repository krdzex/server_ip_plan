import { NextFunction, Request, Response } from "express";
import { IpPlanService } from "../../logic/services/ip-plan.service";
import { CreateIpPlanDto } from "../../data/dtos/ip-plans/create-ip-plan.dto";
import { UpdateIpPlanDto } from "../../data/dtos/ip-plans/update-ip-plan.dto";
import { BaseHttpResponse } from "../base-http-response";

export class IpPlanController {
  constructor(private readonly ipPlanService: IpPlanService) {}

  async getIpPlanById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      const ipPlan = await this.ipPlanService.getIpPlanById(id);

      const response = BaseHttpResponse.success(ipPlan);
      res.json(response.data);
    } catch (err) {
      next(err);
    }
  }

  async createIpPlan(req: Request, res: Response, next: NextFunction) {
    try {
      const ipPlan: CreateIpPlanDto = req.body;

      await this.ipPlanService.createIpPlan(ipPlan);

      const response = BaseHttpResponse.success({}, 201);

      res.json(response.data);
    } catch (err) {
      next(err);
    }
  }

  async updateIpPlan(req: Request, res: Response, next: NextFunction) {
    try {
      const ipPlanUpdate: UpdateIpPlanDto = req.body;
      const id = Number(req.params.id);

      await this.ipPlanService.updateIpPlan(id, ipPlanUpdate);

      const response = BaseHttpResponse.success({}, 204);

      res.json(response.data);
    } catch (err) {
      next(err);
    }
  }

  async deleteIpPlan(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      await this.ipPlanService.deleteIpPlan(id);

      const response = BaseHttpResponse.success({}, 204);

      res.json(response.data);
    } catch (err) {
      next(err);
    }
  }
}
