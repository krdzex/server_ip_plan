import { ServerRepository } from "../data/repositories/server.repository";
import { ServerService } from "../logic/services/server.service";
import { ServerController } from "./controllers/server.controller";

const serverService = new ServerService(new ServerRepository());

export const serverController = new ServerController(serverService);