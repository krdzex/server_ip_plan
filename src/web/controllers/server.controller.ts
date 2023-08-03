import { NextFunction, Request, Response } from "express";
import { ServerService } from "../../logic/services/server.service";
import { UpdateServerDto } from "../../data/dtos/servers/update-server.dto";
import { CreateServerDto } from "../../data/dtos/servers/create-server.dto";
import { BaseHttpResponse } from "../base-http-response";

export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  async getServerById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      const server = await this.serverService.getServerById(id);

      const response = BaseHttpResponse.success(server);
      res.json(response.data);
    } catch (err) {
      next(err);
    }
  }

  async updateServer(req: Request, res: Response, next: NextFunction) {
    try {
      const serverUpdate: UpdateServerDto = req.body;
      const id = Number(req.params.id);

      await this.serverService.updateServer(Number(id), serverUpdate);

      const response = BaseHttpResponse.success({}, 204);

      res.json(response.data);
    } catch (err) {
      next(err);
    }
  }

  async deleteServer(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      await this.serverService.deleteServer(id);

      const response = BaseHttpResponse.success({}, 204);

      res.json(response.data);
    } catch (err) {
      next(err);
    }
  }

  async createServer(req: Request, res: Response, next: NextFunction) {
    try {
      const server: CreateServerDto = req.body;
      await this.serverService.createServer(server);

      const response = BaseHttpResponse.success({}, 201);

      res.json(response.data);
    } catch (err) {
      next(err);
    }
  }
}
