import { ServerWithPlanDto } from "../dtos/servers/server-with-plan.dto";

export interface IServerRepository {
    getServerById(id: number): Promise<ServerWithPlanDto | null>;
}