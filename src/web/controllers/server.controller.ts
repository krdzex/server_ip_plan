import { NextFunction, Request, Response } from "express";
import { ServerService } from "../../logic/services/server.service";

export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  async getServerById(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);

    const server = await this.serverService.getServerById(id);

    return res.status(200).send(server);
  }
}