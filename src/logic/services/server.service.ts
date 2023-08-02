import { IServerRepository } from "../../data/interfaces/i-server-repository";
import { ServerWithPlanDto } from "../../data/dtos/servers/server-with-plan.dto";
import { ServerUpdateDto } from "../../data/dtos/servers/update-server.dto";
import { CreateServerDto } from "../../data/dtos/servers/create-server.dto";

export class ServerService {
  constructor(private readonly _serverRepo: IServerRepository) {}

  async getServerById(id: number): Promise<ServerWithPlanDto> {
    const foundServer = await this._serverRepo.getServerById(id);

    if (!foundServer) {
      throw new Error("nema servera");
    }

    return foundServer;
  }

  async updateServer(id: number, serverUpdate: ServerUpdateDto): Promise<void> {
    const foundServer = await this._serverRepo.getServerById(id);

    if (!foundServer) {
      throw new Error("No server with this id");
    }

    return await this._serverRepo.updateServer(id, serverUpdate);
  }

  async deleteServer(id: number): Promise<void> {
    const server = await this._serverRepo.getServerById(id);

    if (!server) {
      throw new Error("Server not found");
    }

    return await this._serverRepo.deleteServer(id);
  }

  async createServer(server: CreateServerDto): Promise<void> {
    return await this._serverRepo.createServer(server);
  }
}
