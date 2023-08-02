import { IpPlanDto } from "../../data/dtos/ip-plans/ip-plan.dto";
import { IIpPlanRepository } from "../../data/interfaces/ip-plan-repository.interface";

export class IpPlanService {
  constructor(private readonly _ipPlanRepo: IIpPlanRepository) {}

  async getIpPlanById(id: number): Promise<IpPlanDto> {
    const foundIpPlan = await this._ipPlanRepo.getIpPlanById(id);

    if (!foundIpPlan) {
      throw new Error("nema plana");
    }

    return foundIpPlan;
  }
}