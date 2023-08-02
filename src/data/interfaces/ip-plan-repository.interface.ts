import { IpPlanDto } from "../dtos/ip-plans/ip-plan.dto";

export interface IIpPlanRepository {
  getIpPlanById(id: number): Promise<IpPlanDto | null>;
}
