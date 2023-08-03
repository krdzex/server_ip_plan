import { CreateIpPlanDto } from "../../data/dtos/ip-plans/create-ip-plan.dto";
import { IpPlanDto } from "../../data/dtos/ip-plans/ip-plan.dto";
import { UpdateIpPlanDto } from "../../data/dtos/ip-plans/update-ip-plan.dto";
import { PaginateOptions } from "../../data/dtos/pagination/pagination-options";
import { PaginatedResult } from "../../data/dtos/pagination/pagination-result";
import { IIpPlanRepository } from "../../data/interfaces/ip-plan-repository.interface";
import { IpPlanNotFoundException } from "../exceptions/custom-exceptions/ip-plan-not-found.exception";
import { IpPlanSameNameException } from "../exceptions/custom-exceptions/ip-plan-same-name.exception";

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
    const ipPlanWithSameName = await this._ipPlanRepo.getIpPlanByName(
      ipPlan.name
    );

    if (ipPlanWithSameName) {
      throw new IpPlanSameNameException(ipPlan.name);
    }

    return await this._ipPlanRepo.createIpPlan(ipPlan);
  }

  async updateIpPlan(id: number, ipPlanUpdate: UpdateIpPlanDto): Promise<void> {
    const foundIpPlan = await this._ipPlanRepo.getIpPlanById(id);

    if (!foundIpPlan) {
      throw new IpPlanNotFoundException(id);
    }

    if (ipPlanUpdate.name && foundIpPlan.name != ipPlanUpdate.name) {
      const ipPlanWithSameName = await this._ipPlanRepo.getIpPlanByName(
        ipPlanUpdate.name
      );

      if (ipPlanWithSameName) {
        throw new IpPlanSameNameException(ipPlanUpdate.name);
      }
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

  async getIpPlansPagination(
    options: PaginateOptions
  ): Promise<PaginatedResult<IpPlanDto>> {
    const getIpPlansPagination = await this._ipPlanRepo.getIpPlansPagination(
      options
    );

    return getIpPlansPagination;
  }
}
