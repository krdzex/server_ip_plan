import { IServerRepository } from "@interfaces/server-repository.interface";
import { ServerWithPlanDto } from "@dtos/servers/server-with-plan.dto";
import { UpdateServerDto } from "@dtos/servers/update-server.dto";
import { CreateServerDto } from "@dtos/servers/create-server.dto";
import { ServerNotFoundException } from "@exceptions/custom-exceptions/server-not-found.exception";
import { IIpPlanRepository } from "@interfaces/ip-plan-repository.interface";
import { IpPlanNotFoundException } from "@exceptions/custom-exceptions/ip-plan-not-found.exception";
import { PaginateOptions } from "@dtos/pagination/pagination-options";
import { PaginatedResult } from "@dtos/pagination/pagination-result";
import { ServerSameNameException } from "@exceptions/custom-exceptions/server-same-name.exception";

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

    if (serverUpdate.name && foundServer.name != serverUpdate.name) {
      const serverWithSameName = await this._serverRepo.getServerByName(
        serverUpdate.name
      );

      if (serverWithSameName) {
        throw new ServerSameNameException(serverUpdate.name);
      }
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
    const serverWithSameName = await this._serverRepo.getServerByName(
      server.name
    );

    if (serverWithSameName) {
      throw new ServerSameNameException(server.name);
    }

    var foundIpPlan = await this._ipPlanRepo.getIpPlanById(server.ipPlanId);

    if (!foundIpPlan) {
      throw new IpPlanNotFoundException(server.ipPlanId);
    }

    return await this._serverRepo.createServer(server);
  }

  async getServersPagination(
    options: PaginateOptions
  ): Promise<PaginatedResult<ServerWithPlanDto>> {
    const getServersPagination = await this._serverRepo.getServersPagination(
      options
    );

    return getServersPagination;
  }
}
