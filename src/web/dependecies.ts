import { IpPlanRepository } from "../data/repositories/ip-plan.repository";
import { ServerRepository } from "../data/repositories/server.repository";
import { IpPlanService } from "../logic/services/ip-plan.service";
import { ServerService } from "../logic/services/server.service";
import { IpPlanController } from "./controllers/ip-plan.controller";
import { ServerController } from "./controllers/server.controller";

const serverService = new ServerService(new ServerRepository());
const ipPlanService = new IpPlanService(new IpPlanRepository());

export const serverController = new ServerController(serverService);
export const ipPlanController = new IpPlanController(ipPlanService);