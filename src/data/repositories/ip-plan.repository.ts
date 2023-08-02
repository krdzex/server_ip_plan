import { PrismaClient } from "@prisma/client";
import { IpPlanDto } from "../dtos/ip-plans/ip-plan.dto";
import { IIpPlanRepository } from "../interfaces/ip-plan-repository.interface";
import { CreateIpPlanDto } from "../dtos/ip-plans/create-ip-plan.dto";

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
}
