import { PrismaClient } from "@prisma/client";
import { IServerRepository } from "../interfaces/server-repository.interface";
import { ServerWithPlanDto } from "../dtos/servers/server-with-plan.dto";
import { UpdateServerDto } from "../dtos/servers/update-server.dto";
import { CreateServerDto } from "../dtos/servers/create-server.dto";
import { PaginateOptions } from "../dtos/pagination/pagination-options";
import { PaginatedResult } from "../dtos/pagination/pagination-result";
import { paginate } from "../dtos/pagination/paginator";

const prisma = new PrismaClient();

export class ServerRepository implements IServerRepository {
  async getServerById(id: number): Promise<ServerWithPlanDto | null> {
    return await prisma.server.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        description: true,
        status: true,
        ipPlan: {
          select: {
            id: true,
            name: true,
            description: true,
            price: true,
          },
        },
      },
    });
  }

  async updateServer(id: number, serverUpdate: UpdateServerDto): Promise<void> {
    await prisma.server.update({
      where: { id },
      data: serverUpdate,
    });
  }

  async deleteServer(id: number): Promise<void> {
    await prisma.server.delete({
      where: { id },
    });
  }

  async createServer(server: CreateServerDto): Promise<void> {
    await prisma.server.create({
      data: server,
    });
  }

  async getServersPagination(
    options: PaginateOptions
  ): Promise<PaginatedResult<ServerWithPlanDto>> {
    const select: any = {
      id: true,
      name: true,
      description: true,
      status: true,
      ipPlan: {
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
        },
      },
    };

    return paginate(prisma.server, options, select);
  }
}
