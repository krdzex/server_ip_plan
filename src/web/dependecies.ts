import { IpPlanRepository } from "@repositories/ip-plan.repository";
import { ServerRepository } from "@repositories/server.repository";
import { IpPlanService } from "@services/ip-plan.service";
import { ServerService } from "@services/server.service";
import { IpPlanController } from "@controllers/ip-plan.controller";
import { ServerController } from "@controllers/server.controller";

const serverService = new ServerService(
  new ServerRepository(),
  new IpPlanRepository()
);
const ipPlanService = new IpPlanService(new IpPlanRepository());

export const serverController = new ServerController(serverService);
export const ipPlanController = new IpPlanController(ipPlanService);
