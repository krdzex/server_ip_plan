import { CreateIpPlanDto } from "../dtos/ip-plans/create-ip-plan.dto";
import { IpPlanDto } from "../dtos/ip-plans/ip-plan.dto";
import { UpdateIpPlanDto } from "../dtos/ip-plans/update-ip-plan.dto";

export interface IIpPlanRepository {
  getIpPlanById(id: number): Promise<IpPlanDto | null>;
  createIpPlan(ipPlan: CreateIpPlanDto): Promise<void>;
  updateIpPlan(id: number, ipPlanUpdate: UpdateIpPlanDto): Promise<void>;
}
