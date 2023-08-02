import { CreateServerDto } from "../dtos/servers/create-server.dto";
import { ServerWithPlanDto } from "../dtos/servers/server-with-plan.dto";
import { ServerUpdateDto } from "../dtos/servers/update-server.dto";

export interface IServerRepository {
    getServerById(id: number): Promise<ServerWithPlanDto | null>;
    updateServer(id: number, serverUpdate: ServerUpdateDto): Promise<void>;
    deleteServer(id: number): Promise<void>;
    createServer(server: CreateServerDto): Promise<void>;
}