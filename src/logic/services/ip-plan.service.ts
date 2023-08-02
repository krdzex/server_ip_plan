import { CreateIpPlanDto } from "../../data/dtos/ip-plans/create-ip-plan.dto";
import { IpPlanDto } from "../../data/dtos/ip-plans/ip-plan.dto";
import { UpdateIpPlanDto } from "../../data/dtos/ip-plans/update-ip-plan.dto";
import { IIpPlanRepository } from "../../data/interfaces/ip-plan-repository.interface";
import { IpPlanNotFoundException } from "./exceptions/ip-plan-not-found.exception";

export class IpPlanService {
  constructor(private readonly _ipPlanRepo: IIpPlanRepository) {}

  async getIpPlanById(id: number): Promise<IpPlanDto> {
    const foundIpPlan = await this._ipPlanRepo.getIpPlanById(id);

    if (!foundIpPlan) {
      throw new IpPlanNotFoundException(id);
    }

    return foundIpPlan;
  }

  async createIpPlan(ipPlan: CreateIpPlanDto): Promise<void> {
    return await this._ipPlanRepo.createIpPlan(ipPlan);
  }

  async updateIpPlan(id: number, ipPlanUpdate: UpdateIpPlanDto): Promise<void> {
    const foundIpPlan = await this._ipPlanRepo.getIpPlanById(id);

    if (!foundIpPlan) {
      throw new IpPlanNotFoundException(id);
    }

    return await this._ipPlanRepo.updateIpPlan(id, ipPlanUpdate);
  }

  async deleteIpPlan(id: number): Promise<void> {
    const foundIpPlan = await this._ipPlanRepo.getIpPlanById(id);

    if (!foundIpPlan) {
      throw new IpPlanNotFoundException(id);
    }

    return await this._ipPlanRepo.deleteIpPlanWithServers(id);
  }
}
