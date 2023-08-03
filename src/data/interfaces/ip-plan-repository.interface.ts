import { CreateIpPlanDto } from "../dtos/ip-plans/create-ip-plan.dto";
import { IpPlanDto } from "../dtos/ip-plans/ip-plan.dto";
import { UpdateIpPlanDto } from "../dtos/ip-plans/update-ip-plan.dto";
import { PaginateOptions } from "../dtos/pagination/pagination-options";
import { PaginatedResult } from "../dtos/pagination/pagination-result";

export interface IIpPlanRepository {
  getIpPlanById(id: number): Promise<IpPlanDto | null>;
  createIpPlan(ipPlan: CreateIpPlanDto): Promise<void>;
  updateIpPlan(id: number, ipPlanUpdate: UpdateIpPlanDto): Promise<void>;
  deleteIpPlanWithServers(id: number): Promise<void>;
  getIpPlansPagination(
    options: PaginateOptions
  ): Promise<PaginatedResult<IpPlanDto>>;
  getIpPlanByName(name: string): Promise<IpPlanDto | null>;
}
