import { PrismaClient } from "@prisma/client";
import { IServerRepository } from "../interfaces/i-server-repository";
import { IServer } from "../models/server.model";

const prisma = new PrismaClient();

export class ServerRepository implements IServerRepository {
  async findServerById(id: number): Promise<IServer | null> {
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
}
