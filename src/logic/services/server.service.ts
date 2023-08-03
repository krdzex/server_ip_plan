import { IServerRepository } from "../../data/interfaces/server-repository.interface";
import { ServerWithPlanDto } from "../../data/dtos/servers/server-with-plan.dto";
import { UpdateServerDto } from "../../data/dtos/servers/update-server.dto";
import { CreateServerDto } from "../../data/dtos/servers/create-server.dto";
import { ServerNotFoundException } from "../exceptions/server-not-found.exception";
import { IIpPlanRepository } from "../../data/interfaces/ip-plan-repository.interface";
import { IpPlanNotFoundException } from "../exceptions/ip-plan-not-found.exception";

export class ServerService {
  constructor(
    private readonly _serverRepo: IServerRepository,
    private readonly _ipPlanRepo: IIpPlanRepository
  ) {}

  async getServerById(id: number): Promise<ServerWithPlanDto> {
    const foundServer = await this._serverRepo.getServerById(id);

    if (!foundServer) {
      throw new ServerNotFoundException(id);
    }

    return foundServer;
  }

  async updateServer(id: number, serverUpdate: UpdateServerDto): Promise<void> {
    const foundServer = await this._serverRepo.getServerById(id);

    if (!foundServer) {
      throw new ServerNotFoundException(id);
    }

    return await this._serverRepo.updateServer(id, serverUpdate);
  }

  async deleteServer(id: number): Promise<void> {
    const server = await this._serverRepo.getServerById(id);

    if (!server) {
      throw new ServerNotFoundException(id);
    }

    return await this._serverRepo.deleteServer(id);
  }

  async createServer(server: CreateServerDto): Promise<void> {
    var foundIpPlan = await this._ipPlanRepo.getIpPlanById(server.ipPlanId);

    if (!foundIpPlan) {
      throw new IpPlanNotFoundException(server.ipPlanId);
    }

    return await this._serverRepo.createServer(server);
  }
}
