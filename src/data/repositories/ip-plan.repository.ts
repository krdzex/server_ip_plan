import { PrismaClient } from "@prisma/client";
import { IpPlanDto } from "../dtos/ip-plans/ip-plan.dto";
import { IIpPlanRepository } from "../interfaces/ip-plan-repository.interface";
import { CreateIpPlanDto } from "../dtos/ip-plans/create-ip-plan.dto";
import { UpdateIpPlanDto } from "../dtos/ip-plans/update-ip-plan.dto";
import { PaginatedResult } from "../dtos/pagination/pagination-result";
import { paginate } from "../dtos/pagination/paginator";
import { PaginateOptions } from "../dtos/pagination/pagination-options";

const prisma = new PrismaClient();

export class IpPlanRepository implements IIpPlanRepository {
  async getIpPlanById(id: number): Promise<IpPlanDto | null> {
    const ipPlan = await prisma.iPPlan.findUnique({
      where: { id },
    });

    return ipPlan;
  }

  async createIpPlan(ipPlan: CreateIpPlanDto): Promise<void> {
    await prisma.iPPlan.create({
      data: ipPlan,
    });
  }

  async updateIpPlan(id: number, ipPlanUpdate: UpdateIpPlanDto): Promise<void> {
    await prisma.iPPlan.update({
      where: { id },
      data: ipPlanUpdate,
    });
  }

  async deleteIpPlanWithServers(id: number): Promise<void> {
    const deleteServers = prisma.server.deleteMany({
      where: {
        ipPlanId: id,
      },
    });

    const deleteIpPlan = prisma.iPPlan.delete({
      where: {
        id,
      },
    });

    await prisma.$transaction([deleteServers, deleteIpPlan]);
  }

  async getIpPlansPagination(
    options: PaginateOptions
  ): Promise<PaginatedResult<IpPlanDto>> {
    return paginate(prisma.iPPlan, options);
  }
}
