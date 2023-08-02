import { CreateServerDto } from "../dtos/servers/create-server.dto";
import { ServerWithPlanDto } from "../dtos/servers/server-with-plan.dto";
import { UpdateServerDto } from "../dtos/servers/update-server.dto";

export interface IServerRepository {
    getServerById(id: number): Promise<ServerWithPlanDto | null>;
    updateServer(id: number, serverUpdate: UpdateServerDto): Promise<void>;
    deleteServer(id: number): Promise<void>;
    createServer(server: CreateServerDto): Promise<void>;
}