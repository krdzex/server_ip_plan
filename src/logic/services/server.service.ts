import { IServerRepository } from "../../data/interfaces/i-server-repository";
import { ServerWithPlanDto } from "../../data/dtos/servers/server-with-plan.dto";

export class ServerService {
  constructor(private readonly _serverRepo: IServerRepository) {}

  async getServerById(id: number): Promise<ServerWithPlanDto> {
    const foundServer = await this._serverRepo.getServerById(id);

    if (!foundServer) {
      throw new Error("nema servera");
    }

    return foundServer;
  }
}