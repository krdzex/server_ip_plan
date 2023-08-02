import { PrismaClient } from "@prisma/client";
import { IServerRepository } from "../interfaces/i-server-repository";
import { ServerWithPlanDto } from "../dtos/servers/server-with-plan.dto";
import { ServerUpdateDto } from "../dtos/servers/update-server.dto";
import { CreateServerDto } from "../dtos/servers/create-server.dto";

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

  async updateServer(id: number, serverUpdate: ServerUpdateDto): Promise<void> {
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
      data: server
    });
  }
}
