import { NextFunction, Request, Response } from "express";
import { ServerService } from "../../logic/services/server.service";
import { ServerUpdateDto } from "../../data/dtos/servers/update-server.dto";

export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  async getServerById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const server = await this.serverService.getServerById(id);

    return res.status(200).send(server);
  }

  async updateServer(req: Request, res: Response, next: NextFunction) {
    try {
      const serverUpdate: ServerUpdateDto = req.body;
      const { id } = req.params;
      await this.serverService.updateServer(Number(id), serverUpdate);
      res.status(200).json({ message: "Server updated successfully" });
    } catch (err) {
      next(err);
    }
  }

  async deleteServer(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await this.serverService.deleteServer(Number(id));
      res.status(200).json({ message: "Server deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
}
