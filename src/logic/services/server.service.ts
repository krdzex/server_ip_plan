import { IServerRepository } from "../../data/interfaces/i-server-repository";
import { ServerWithPlanDto } from "../../data/dtos/servers/server-with-plan.dto";
import { ServerUpdateDto } from "../../data/dtos/servers/update-server.dto";

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

    if(!foundServer){
        throw new Error("No server with this id");
    }

    return await this._serverRepo.updateServer(id, serverUpdate);
  }
}