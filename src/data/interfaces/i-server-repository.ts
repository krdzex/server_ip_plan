import { ServerWithPlanDto } from "../dtos/server-with-plan.dto";

export interface IServerRepository {
    getServerById(id: number): Promise<ServerWithPlanDto | null>;
}