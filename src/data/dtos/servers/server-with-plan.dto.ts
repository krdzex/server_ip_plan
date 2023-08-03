import { ServerStatus } from "@prisma/client";
import { IpPlanDto } from "../ip-plans/ip-plan.dto";

export class ServerWithPlanDto {
  constructor(
    public readonly id: Number,
    public readonly name: String,
    public readonly description: String,
    public readonly status: ServerStatus,
    public readonly ipPlan: IpPlanDto
  ) {}
}