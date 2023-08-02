import { NextFunction, Request, Response } from "express";
import { ServerService } from "../../logic/services/server.service";
import { UpdateServerDto } from "../../data/dtos/servers/update-server.dto";
import { CreateServerDto } from "../../data/dtos/servers/create-server.dto";
import { BaseHttpResponse } from "../base-http-response";

export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  async getServerById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const server = await this.serverService.getServerById(id);

    const response = BaseHttpResponse.success(server);
    res.json(response);
  }

  async updateServer(req: Request, res: Response, next: NextFunction) {
    try {
      const serverUpdate: UpdateServerDto = req.body;
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

  async createServer(req: Request, res: Response, next: NextFunction) {
    try {
      const server: CreateServerDto = req.body;
      await this.serverService.createServer(server);
      res.status(201).json("Server created");
    } catch (err) {
      next(err);
    }
  }
}
