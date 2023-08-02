import { ServerWithPlanDto } from "../../logic/services/dtos/server-with-plan.dto";

export interface IServerRepository {
    getServerById(id: number): Promise<ServerWithPlanDto | null>;
}